import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
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
import { Bell, CreditCard, LogOut, Settings, User } from "lucide-react";
import { logout } from "@/app/(auth)/action";
import { ModeToggle } from "./ModeToggle";
import NotificationBell from "./NotificationBell";

interface NavbarProps {
  username: string;
  avatarUrl: string | null;
}

export default function Navbar({ username, avatarUrl }: NavbarProps) {
  return (
    <div className="mx-16 pt-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-primary">Tassman</h1>
      <div className="flex gap-3 items-center">
        <ModeToggle />
        <NotificationBell />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-12 h-12 cursor-pointer">
              <AvatarImage src={avatarUrl ?? ""} alt={username} />
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
                <span>Settings</span>
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
      </div>
    </div>
  );
}
