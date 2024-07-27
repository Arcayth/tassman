import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "@/providers/SessionProvider";
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
        <div className="flex flex-row mt-3">
          <Sidebar className="" />
          <div className="w-screen rounded-lg bg-card">
            <div className="mx-16 mt-3">{children}</div>
          </div>
        </div>
    </SessionProvider>
  );
}
