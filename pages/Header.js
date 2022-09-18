import React from "react";
import {
  HomeIcon,
  CheckBadgeIcon,
  BoltIcon,
  InboxStackIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <header className="header mt-2 flex justify-between ml-4 mr-4   ">
      <div className="flex flex-grow ">
        <HeaderIcon title="HOME" Icon={HomeIcon} />
        <HeaderIcon title="TRENDING" Icon={BoltIcon} />
        <HeaderIcon title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderIcon title="COLLECTIONS" Icon={InboxStackIcon} />
        <HeaderIcon title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
      </div>
      {/* logo */}
      <h1 className="text-4xl font-bold">hulu</h1>
    </header>
  );
}

export default Header;
