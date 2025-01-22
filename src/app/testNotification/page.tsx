"use client";

import React, { useState } from "react";
import Notification from "@/components/notification/notification";

const TestNotificationPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setShow(true)}
        className="bg-green-500 text-white p-4 rounded-lg"
      >
        Show Notification
      </button>

      {show && (
        <Notification
          message="Hi, this is Kiswa's website!"
          duration={5000} // Optional: 5 seconds
          onClose={() => setShow(false)} // Hide after close
        />
      )}
    </div>
  );
};

export default TestNotificationPage;
