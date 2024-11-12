import React from "react";

import "./notification.css";
import { ReactComponent as NotificationSvg } from "./notification-bell.svg";

export const Notification = () => {
  return (
    <div className="notificationBell">
      <NotificationSvg />
      <div className="notificationBell__indicator">
        <div></div>
      </div>
    </div>
  );
};
