import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "@/providers/SessionProvider";
import Navbar from "@/components/Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <Navbar
        className="bg-background"
        username={session.user.username}
        avatarUrl={session.user.avatarUrl}
      />
      {children}
    </SessionProvider>
  );
}
