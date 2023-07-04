"use client";
import { useSession } from "next-auth/react";

export default function Header({ title }) {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 w-full h-16 border text-white py-7 px-7 flex items-center">
      <h1>{title}</h1>
      {session && <p>Sign out</p>}
    </div>
  );
}
