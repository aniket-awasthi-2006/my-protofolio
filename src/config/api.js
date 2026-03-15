const rawApiBaseUrl = (process.env.REACT_APP_API_BASE_URL || "http://localhost:5000").trim();

export const API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, "");

export const getApiUrl = (path) => {
  if (!path) {
    return API_BASE_URL;
  }

  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const looksLikeHtml = (value) => {
  const text = String(value || "").trim().toLowerCase();
  return text.startsWith("<!doctype") || text.startsWith("<html");
};

const toReadableText = (value) =>
  String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const fetchApiJson = async (path, options = {}) => {
  const response = await fetch(getApiUrl(path), options);
  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");

  let jsonData = null;
  let textData = "";

  if (isJson) {
    try {
      jsonData = await response.json();
    } catch (error) {
      throw new Error("API returned invalid JSON.");
    }
  } else {
    textData = await response.text();
  }

  if (!response.ok) {
    const message =
      jsonData?.status ||
      jsonData?.message ||
      toReadableText(textData) ||
      `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  if (!isJson) {
    if (looksLikeHtml(textData)) {
      throw new Error("API returned HTML instead of JSON. Verify backend URL and that the backend server is running.");
    }

    throw new Error("API returned a non-JSON response.");
  }

  return jsonData;
};
