import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide the notification after 3 seconds
  }, []);

  return (
    showNotification && (
      <div className="notification">
        <p>Hi, this is Kiswas website!</p>
      </div>
    )
  );
};

export default Notification;
