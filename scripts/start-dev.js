const { spawn } = require("child_process");
const path = require("path");
require("dotenv").config();

const rootDir = path.join(__dirname, "..");
const nodeBin = process.execPath;

const children = [];
let shuttingDown = false;

const startProcess = (name, args, env = {}) => {
  const child = spawn(nodeBin, args, {
    cwd: rootDir,
    env: { ...process.env, ...env },
    stdio: "inherit",
  });

  children.push(child);

  child.on("exit", (code, signal) => {
    if (shuttingDown) {
      return;
    }

    if (code !== 0 && signal !== "SIGTERM") {
      console.error(`${name} stopped unexpectedly.`);
      shutdown(code || 1);
    }
  });

  return child;
};

const shutdown = (code = 0) => {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }

  process.exit(code);
};

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

startProcess("API server", ["server.js"], {
  PORT: process.env.API_PORT || "5000",
});
startProcess("React app", ["scripts/start-client.js"], {
  CLIENT_PORT: process.env.CLIENT_PORT || "3000",
  REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000",
});
