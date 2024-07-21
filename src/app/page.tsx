"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  let [auth, setAuth] = useState(false);
  return (
    <>
      {!auth && (
        <div className="h-screen">
          <div className="container pt-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Tassman</h1>
            <Button className="text-lg bg-primary">Register</Button>
          </div>
          <div className="flex flex-col gap-3 items-center h-full mt-48">
            <h1 className="text-4xl font-bold">Stay Organized, Stay Productive.</h1>
            <h2 className="text-2xl">Manage your tasks effortlessly and boost your productivity.</h2>
            <Button onClick={() => setAuth(true)} className="w-fit text-lg">Get Started</Button>
          </div>
        </div>

      )}
      {auth && (
        <div>
          <Navbar />
          <main className="min-h-screen p-24">hh
            <Button onClick={() => setAuth(false)} className="w-fit text-lg">logout</Button>
          </main>
        </div>
      )}
    </>
  );
}
