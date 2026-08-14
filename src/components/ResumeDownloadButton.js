import { useState } from "react";
import { resume } from "../content/portfolioData";
import { trackResumeDownload } from "../config/tracking";
import { SuccessPopup } from "./SuccessPopup";

const triggerResumeDownload = () => {
   window.open('https://drive.usercontent.google.com/u/0/uc?id=1bhT8oPewb9Ko1sA2wskdKZt59TPlC5a3&export=download');
};

export const ResumeDownloadButton = ({ source, className, children, bottomOffset = 24 }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDownload = async (event) => {
    event.preventDefault();

    if (isSaving) {
      return;
    }

    setIsSaving(true);

    try {
      await trackResumeDownload(source);
      triggerResumeDownload();
      setPopupVisible(true);
    } catch (error) {
      console.error("Unable to download resume:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <a
        className={className}
        href={resume.href}
        download
        onClick={handleDownload}
        aria-busy={isSaving}
      >
        {children}
      </a>
      <SuccessPopup
        message="Resume Downloaded"
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        bottomOffset={bottomOffset}
      />
    </>
  );
};
