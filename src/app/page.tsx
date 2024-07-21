"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="container pt-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Tassman</h1>
          <Button className="text-lg bg-primary">Register</Button>
        </div>
        <div className="flex flex-col gap-3 items-center h-full mt-48">
          <h1 className="text-4xl font-bold">
            Stay Organized, Stay Productive.
          </h1>
          <h2 className="text-2xl">
            Manage your tasks effortlessly and boost your productivity.
          </h2>
          <Button className="w-fit text-lg">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
