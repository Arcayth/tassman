import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { LogOut, Settings, User } from "lucide-react";
import { logout } from "@/app/(auth)/action";
import NotificationBell from "./NotificationBell";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  username: string;
  avatarUrl: string | null;
}

export default function Navbar({
  className,
  username,
  avatarUrl,
}: NavbarProps) {
  return (
    <div
      className={cn("mx-16 pt-4 flex items-center justify-between", className)}
    >
      <Link href="/dashboard">
        <h1 className="text-3xl font-bold text-primary">Tassman</h1>
      </Link>
      <div className="flex gap-3 items-center">
        <NotificationBell />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-12 h-12 cursor-pointer">
              <AvatarImage src={avatarUrl ? avatarUrl : ""} alt={username} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              {" "}
              <span className="font-bold capitalize">{username}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <Link className="w-full" href="/settings">
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <form action={logout}>
                <Button variant={"ghost"} className="w-full">
                  <DropdownMenuItem className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-full" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </Button>
              </form>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <h2 className="font-semibold">{username}</h2>
      </div>
    </div>
  );
}
