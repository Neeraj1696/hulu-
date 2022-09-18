import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex whitespace-nowrap space-x-10 pl-5  overflow-x-scroll scrollbar-hide ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?general=${key}`)}
            className="cursor-pointer transition duration-100 transform hover: scale-125 hover:text-gray-400"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-slate-300 h-10 w-1/12" />
    </nav>
  );
}

export default Navbar;
