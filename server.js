const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dns = require("dns");

dotenv.config();

const app = express();
const router = express.Router();

const PORT = Number(process.env.PORT || 5000);
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI_FALLBACK = process.env.MONGODB_URI_FALLBACK;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || "portfolio";
const MONGODB_DNS_SERVERS = process.env.MONGODB_DNS_SERVERS || "";
const MONGODB_PREFER_FALLBACK = String(process.env.MONGODB_PREFER_FALLBACK || "false").toLowerCase() === "true";
const MONGODB_CONNECT_TIMEOUT_MS = Number(process.env.MONGODB_CONNECT_TIMEOUT_MS || 15000);

if (!MONGODB_URI && !MONGODB_URI_FALLBACK) {
  console.error("Missing Mongo connection string. Set MONGODB_URI or MONGODB_URI_FALLBACK in .env");
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use("/", router);

const visitorSchema = new mongoose.Schema(
  {
    visitedAt: { type: Date, default: Date.now },
    ipAddress: { type: String, trim: true },
    userAgent: { type: String, trim: true },
    path: { type: String, trim: true },
    source: { type: String, trim: true },
  },
  { versionKey: false }
);

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    subscribedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const contactMessageSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const resumeDownloadSchema = new mongoose.Schema(
  {
    downloadedAt: { type: Date, default: Date.now },
    ipAddress: { type: String, trim: true },
    userAgent: { type: String, trim: true },
    path: { type: String, trim: true },
    source: { type: String, trim: true },
  },
  { versionKey: false }
);

const Visitor = mongoose.model("Visitor", visitorSchema, "visitors");
const Subscriber = mongoose.model("Subscriber", subscriberSchema, "subscribers");
const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema, "contact_messages");
const ResumeDownload = mongoose.model("ResumeDownload", resumeDownloadSchema, "resume_downloads");

const getClientIp = (req) => {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (forwardedFor) {
    return String(forwardedFor).split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "";
};

const buildTrackingMetadata = (req, body) => ({
  ipAddress: getClientIp(req),
  userAgent: req.get("user-agent") || "",
  path: String(body?.path || ""),
  source: String(body?.source || ""),
});

const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

const configureDnsServers = () => {
  if (!MONGODB_DNS_SERVERS.trim()) {
    return;
  }

  const servers = MONGODB_DNS_SERVERS.split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (servers.length === 0) {
    return;
  }

  try {
    dns.setServers(servers);
    console.log(`Using custom DNS servers: ${servers.join(", ")}`);
  } catch (error) {
    console.error("Failed to set custom DNS servers:", error.message);
  }
};

const getMongoConnectionCandidates = () => {
  const primaryCandidate = MONGODB_URI ? { label: "primary", uri: MONGODB_URI } : null;
  const fallbackCandidate = MONGODB_URI_FALLBACK ? { label: "fallback", uri: MONGODB_URI_FALLBACK } : null;
  const candidates = [];

  if (MONGODB_PREFER_FALLBACK) {
    if (fallbackCandidate) {
      candidates.push(fallbackCandidate);
    }
    if (primaryCandidate) {
      candidates.push(primaryCandidate);
    }
  } else {
    if (primaryCandidate) {
      candidates.push(primaryCandidate);
    }
    if (fallbackCandidate) {
      candidates.push(fallbackCandidate);
    }
  }

  return candidates;
};

const connectMongo = async () => {
  const candidates = getMongoConnectionCandidates();
  const failureMessages = [];
  const connectWithTimeout = (uri, options, timeoutMs) =>
    new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(`Connection attempt timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      mongoose
        .connect(uri, options)
        .then((result) => {
          clearTimeout(timer);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timer);
          reject(error);
        });
    });

  for (const candidate of candidates) {
    try {
      await connectWithTimeout(
        candidate.uri,
        {
          dbName: MONGODB_DB_NAME,
          serverSelectionTimeoutMS: MONGODB_CONNECT_TIMEOUT_MS,
        },
        MONGODB_CONNECT_TIMEOUT_MS
      );

      console.log(`MongoDB connected (${MONGODB_DB_NAME}) using ${candidate.label} URI`);
      return;
    } catch (error) {
      failureMessages.push(`${candidate.label}: ${error.message}`);
      try {
        await mongoose.disconnect();
      } catch (_) {
        // Ignore disconnect errors while attempting next candidate.
      }
    }
  }

  throw new Error(failureMessages.join(" | "));
};

router.get("/api/health", (_, res) => {
  res.json({
    status: "ok",
    mongoState: mongoose.connection.readyState,
  });
});

router.post("/api/visitors", async (req, res) => {
  try {
    const visit = await Visitor.create({
      visitedAt: new Date(),
      ...buildTrackingMetadata(req, req.body),
    });

    const totalVisitors = await Visitor.countDocuments();

    res.status(201).json({
      code: 201,
      status: "Visit recorded",
      totalVisitors,
      visitId: visit._id,
    });
  } catch (error) {
    console.error("Failed to store visit:", error.message);
    res.status(500).json({ code: 500, status: "Unable to record visit" });
  }
});

router.post("/api/resume-downloads", async (req, res) => {
  try {
    const download = await ResumeDownload.create({
      downloadedAt: new Date(),
      ...buildTrackingMetadata(req, req.body),
    });

    const totalDownloads = await ResumeDownload.countDocuments();

    res.status(201).json({
      code: 201,
      status: "Resume download recorded",
      totalDownloads,
      downloadId: download._id,
    });
  } catch (error) {
    console.error("Failed to store resume download:", error.message);
    res.status(500).json({ code: 500, status: "Unable to record resume download" });
  }
});

router.get("/api/resume-downloads", async (req, res) => {
  try {
    const requestedLimit = Number(req.query.limit || 100);
    const limit = Number.isNaN(requestedLimit) ? 100 : Math.min(Math.max(requestedLimit, 1), 1000);

    const [totalDownloads, downloads] = await Promise.all([
      ResumeDownload.countDocuments(),
      ResumeDownload.find(
        {},
        { _id: 1, downloadedAt: 1, ipAddress: 1, userAgent: 1, path: 1, source: 1 }
      )
        .sort({ downloadedAt: -1 })
        .limit(limit),
    ]);

    res.json({
      totalDownloads,
      downloads,
    });
  } catch (error) {
    console.error("Failed to fetch resume downloads:", error.message);
    res.status(500).json({ code: 500, status: "Unable to fetch resume downloads" });
  }
});

router.get("/api/visitors", async (req, res) => {
  try {
    const requestedLimit = Number(req.query.limit || 100);
    const limit = Number.isNaN(requestedLimit) ? 100 : Math.min(Math.max(requestedLimit, 1), 1000);

    const [totalVisitors, visits] = await Promise.all([
      Visitor.countDocuments(),
      Visitor.find({}, { _id: 1, visitedAt: 1, ipAddress: 1, userAgent: 1, path: 1, source: 1 })
        .sort({ visitedAt: -1 })
        .limit(limit),
    ]);

    res.json({
      totalVisitors,
      visits,
    });
  } catch (error) {
    console.error("Failed to fetch visitors:", error.message);
    res.status(500).json({ code: 500, status: "Unable to fetch visitors" });
  }
});

router.post("/api/subscribers", async (req, res) => {
  const email = String(req.body?.email || "")
    .trim()
    .toLowerCase();

  if (!email || !isValidEmail(email)) {
    res.status(400).json({ code: 400, status: "Please provide a valid email address" });
    return;
  }

  try {
    const subscriber = await Subscriber.create({ email });
    res.status(201).json({
      code: 201,
      status: "Subscribed successfully",
      subscriberId: subscriber._id,
    });
  } catch (error) {
    if (error?.code === 11000) {
      res.status(200).json({ code: 200, status: "Email already subscribed" });
      return;
    }

    console.error("Failed to store subscriber:", error.message);
    res.status(500).json({ code: 500, status: "Unable to save subscriber" });
  }
});

router.get("/api/subscribers", async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, { _id: 1, email: 1, subscribedAt: 1 }).sort({
      subscribedAt: -1,
    });
    res.json({ total: subscribers.length, subscribers });
  } catch (error) {
    console.error("Failed to fetch subscribers:", error.message);
    res.status(500).json({ code: 500, status: "Unable to fetch subscribers" });
  }
});

const saveContactMessage = async (req, res) => {
  const firstName = String(req.body?.firstName || "").trim();
  const lastName = String(req.body?.lastName || "").trim();
  const email = String(req.body?.email || "")
    .trim()
    .toLowerCase();
  const phone = String(req.body?.phone || "").trim();
  const message = String(req.body?.message || "").trim();
  const fullName = `${firstName} ${lastName}`.trim();

  if (!firstName || !lastName || !message || !isValidEmail(email)) {
    res.status(400).json({ code: 400, status: "Please provide valid contact details" });
    return;
  }

  try {
    const contactRecord = await ContactMessage.create({
      firstName,
      lastName,
      fullName,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    res.status(201).json({
      code: 201,
      status: "Message stored",
      messageId: contactRecord._id,
    });
  } catch (error) {
    console.error("Failed to store contact message:", error.message);
    res.status(500).json({ code: 500, status: "Unable to save message" });
  }
};

router.post("/contact", saveContactMessage);
router.post("/api/contact", saveContactMessage);

router.get("/api/contact-messages", async (req, res) => {
  try {
    const messages = await ContactMessage.find(
      {},
      {
        _id: 1,
        firstName: 1,
        lastName: 1,
        fullName: 1,
        email: 1,
        phone: 1,
        message: 1,
        createdAt: 1,
      }
    ).sort({ createdAt: -1 });

    res.json({ total: messages.length, messages });
  } catch (error) {
    console.error("Failed to fetch contact messages:", error.message);
    res.status(500).json({ code: 500, status: "Unable to fetch contact messages" });
  }
});

router.get("/api/stats", async (_, res) => {
  try {
    const [
      totalVisitors,
      totalSubscribers,
      totalContactMessages,
      totalResumeDownloads,
      latestVisit,
      latestResumeDownload,
      latestSubscriber,
      latestContactMessage,
    ] = await Promise.all([
      Visitor.countDocuments(),
      Subscriber.countDocuments(),
      ContactMessage.countDocuments(),
      ResumeDownload.countDocuments(),
      Visitor.findOne({}, { _id: 1, visitedAt: 1, path: 1, source: 1 }).sort({ visitedAt: -1 }),
      ResumeDownload.findOne({}, { _id: 1, downloadedAt: 1, path: 1, source: 1 }).sort({
        downloadedAt: -1,
      }),
      Subscriber.findOne({}, { _id: 1, email: 1, subscribedAt: 1 }).sort({ subscribedAt: -1 }),
      ContactMessage.findOne({}, { _id: 1, fullName: 1, email: 1, createdAt: 1 }).sort({
        createdAt: -1,
      }),
    ]);

    res.json({
      totals: {
        visitors: totalVisitors,
        resumeDownloads: totalResumeDownloads,
        subscribers: totalSubscribers,
        contactMessages: totalContactMessages,
      },
      latest: {
        visit: latestVisit,
        resumeDownload: latestResumeDownload,
        subscriber: latestSubscriber,
        contactMessage: latestContactMessage,
      },
    });
  } catch (error) {
    console.error("Failed to fetch stats:", error.message);
    res.status(500).json({ code: 500, status: "Unable to fetch stats" });
  }
});

const startServer = async () => {
  try {
    configureDnsServers();
    await connectMongo();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect MongoDB:", error.message);
    process.exit(1);
  }
};

startServer();
