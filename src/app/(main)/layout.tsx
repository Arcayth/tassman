import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "@/providers/SessionProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
        username={session.user.username}
        avatarUrl={session.user.avatarUrl}
      />
      <div className="flex flex-row mt-8 ">
        <Sidebar />
        <div> 
        {children}
        </div>
      </div>
    </SessionProvider>
  );
}
