"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";

export default function page() {
  const { data: session, status } = useSession({
    required: false,
  });
  const [username, setUsername] = useState("")
  console.log(session, status)

  useEffect(() => {
    setUsername("")
    if (status === "authenticated") {
      setUsername(session.user.name)
    }
  }, [status])



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello {username}
      <button className="w-full text-white border border-gray-200 bg-auth0-orange hover:bg-auth0-orange-dark text-center py-2"
        onClick={() =>
          signOut({ redirect: true, callbackUrl: "/" })
        }>
        Sign out
      </button>
    </main>
  );
}
