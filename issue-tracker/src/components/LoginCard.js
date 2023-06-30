"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginCard() {
  const [displayCredentials, setDisplayCredentials] = useState(false)

  const handleClick = () => {
    setDisplayCredentials((prevState) => {
      return !prevState
    })
  }
  return (
    <div className="bg-white border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 space-y-6">
      <h3 className="text-black text-2xl font-bold text-center">
        Issue Tracker
      </h3>
      <button
        className="w-full text-white border border-gray-200 bg-auth0-orange hover:bg-auth0-orange-dark text-center py-2"
        onClick={() =>
          signIn("auth0", {
            redirect: true,
            callbackUrl: "/dashboard",
          })
        }
      >
        Log in with Auth0
      </button>
      <button
        className="text-black"
        onClick={handleClick}>Click here to show demo user credentials</button>
      {displayCredentials &&
        <div className="text-black">
          <p>Email: issuetrackerdemo@test.com</p>
          <p>Password: 3fh&ZBDGyQDvKBd</p>
        </div>
      }
    </div>
  );
}
