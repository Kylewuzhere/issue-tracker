"use client";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const links = [
    { href: "/home", title: "Home" },
    {
      href: "/manage-users",
      title: "Manage users",
    },
    {
      href: "/manage-projects",
      title: "Manage Projects",
    },
    {
      href: "/my-projects",
      title: "My Projects",
    },
    {
      href: "/my-tickets",
      title: "My Tickets",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-white w-64 fixed h-full">
      <div className="flex bg-white text-black align-items-center justify-content">
        Hello World
      </div>
      <div className="flex-auto overflow-x-hidden overflow-y-auto">
        <ul className="list-none flex flex-col">
          {links.map(({ href, title }, index) => {
            const isActive = pathname.startsWith(href);

            return (
              <Link
                key={index}
                className={isActive ? "text-blue-500" : "text-gray-500"}
                href={href}
              >
                {title}
              </Link>
            );
          })}
          <li>
            <button
              className="text-white bg-auth0-orange py-3 px-7 rounded text-sm"
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
