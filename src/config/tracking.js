import { getApiUrl } from "./api";

export const trackResumeDownload = async (source) => {
  const response = await fetch(getApiUrl("/api/resume-downloads"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      source,
      path: window.location.pathname,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to record resume download");
  }

  return response.json();
};

export const trackResumeDownloadBeacon = (source) => {
  const payload = JSON.stringify({
    source,
    path: window.location.pathname,
  });

  const endpoint = getApiUrl("/api/resume-downloads");

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" });
    navigator.sendBeacon(endpoint, blob);
    return;
  }

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: payload,
    keepalive: true,
  }).catch((error) => {
    console.error("Unable to track resume download:", error);
  });
};
