import React from "react";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";

const NotificationBell = () => {
  return (
    <div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 cursor-pointer" />
          </Button>
    </div>
  );
};

export default NotificationBell;
