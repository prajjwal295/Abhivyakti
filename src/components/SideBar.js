import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosStats } from "react-icons/io";

const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "profile",
    label: "Profile",
    path: "/dashboard/my-profile",
    icon: <CgProfile />,
  },
  {
    key: "stats",
    label: "Stats",
    path: "/dashboard/stats",
    icon: <IoIosStats />,
  },
];

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-richblack-800 hover:no-underline bg-richblack-700 rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className="bg-richblack-800 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <span className=" text-3xl font-bold text-white">
          Dashboard
        </span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-yellow-50"
          : "text-white",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
