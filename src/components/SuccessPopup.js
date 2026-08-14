import { useEffect } from "react";

export const SuccessPopup = ({ message, visible, onClose, duration = 3200, bottomOffset = 24 }) => {
  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [visible, onClose, duration]);

  if (!message) {
    return null;
  }

  return (
    <div
      className={`success-popup ${visible ? "is-visible" : ""}`}
      style={{ bottom: `${bottomOffset}px` }}
      role="status"
      aria-live="polite"
    >
      <span className="success-popup__badge" aria-hidden="true">✔️</span>
      <p style={{ fontSize: '20px' }}>{message}</p>
    </div>
  );
};
