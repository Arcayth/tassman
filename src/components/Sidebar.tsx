import {
  ClipboardList,
  Files,
  FolderKanban,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

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

const Sidebar = ({className}: {className?: string}) => {
  return (
    <div className={cn("ml-12 w-60 h-screen flex flex-col gap-2 ", className)}>
      {sidebarItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <Button
            variant={"ghost"}
            className="flex items-start justify-start w-full text-start"
          >
            <div className="flex flex-row gap-2">
              {item.icons}
              <p className="text-base font-normal">{item.title}</p>
            </div>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
