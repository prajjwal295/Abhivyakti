import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" min-w-[160px] bg-richblack-800">
      <div className="flex flex-col gap-5">
        <Link to="/dashboard/profile">
          <div className="text-white bg-richblue-200 p-3">Profile</div>
        </Link>
        <Link to="/dashboard/stats">
          <div className="text-white bg-richblue-200 p-3">Stats</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
