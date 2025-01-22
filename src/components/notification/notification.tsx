import React, { useState, useEffect } from "react";

interface NotificationProps {
  message: string;
  duration?: number; // Duration in milliseconds (optional)
  onClose?: () => void; // Callback for when the notification closes (optional)
}

const Notification: React.FC<NotificationProps> = ({ message, duration = 3000, onClose }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);

    const timer = setTimeout(() => {
      setShowNotification(false);
      if (onClose) onClose(); // Call onClose callback if provided
    }, duration);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [duration, onClose]);

  if (!showNotification) return null;

  return (
    <div className="notification bg-blue-500 text-white p-4 rounded-lg shadow-lg fixed top-5 right-5">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
