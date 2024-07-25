"use client";
import {
  ClipboardList,
  Files,
  FolderKanban,
  LayoutDashboard,
  ArrowLeftFromLine,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

interface SidebarItemsProps {
  title: string;
  icons: React.ReactNode;
  href: string;
}

const sidebarItems: SidebarItemsProps[] = [
  {
    title: "Dashboard",
    icons: <LayoutDashboard />,
    href: "/dashboard",
  },
  {
    title: "Projects",
    icons: <FolderKanban />,
    href: "/projects",
  },
  {
    title: "Tasks",
    icons: <ClipboardList />,
    href: "/tasks",
  },
  {
    title: "Files",
    icons: <Files />,
    href: "/files",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`ml-12 h-screen flex flex-col ${
          open ? "w-60 duration-300" : "w-10 duration-300"
        } gap-2`}
      >
        <div className={`${!open ? "self-start" : "self-end"}`}>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="p-2 justify-center items-center cursor-pointer transition-transform duration-300 "
            onClick={() => setOpen(!open)}
            style={{ transform: open ? "rotate(0)" : "rotate(180deg)" }}
          >
            <ArrowLeftFromLine />
          </Button>
        </div>
        <div>
          {sidebarItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button
                variant={"ghost"}
                className={`flex items-start justify-start w-full text-start  ${
                  open ? "pl-2" : "pl-2"
                }`}
              >
                <div className="flex flex-row gap-2 items-center transition-transform duration-300">
                  {item.icons}
                  {open && (
                    <p className="text-base font-normal">{item.title}</p>
                  )}
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
