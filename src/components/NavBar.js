import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/Abhivyakti_logo-removebg-preview.png";
import CTAbutton from "./CTAButton";
import ProfileDropDown from "./ProfileDropDown";

const NavBar = () => {
  const token = useSelector((state) => state?.auth?.token);
  const { user } = useSelector((state) => state.profile);

  const [subLinks, setSubLinks] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  console.log(token);

  useEffect(() => {}, [token]);

  return (
    <div
      className={`px-10 flex h-14 items-center justify-between border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=" border-white w-[90%]"
            loading="lazy"
          />
        </Link>

        {/* Nav Links */}

        <div className="flex gap-6 ">
          <div
            className={`${
              matchRoute("/home") ? "text-yellow-25" : "text-richblack-50"
            }`}
          >
            <Link to="/home">Home</Link>
          </div>

          <div
            className={`${
              matchRoute("/about") ? "text-yellow-25" : "text-richblack-50"
            }`}
          >
            <Link to="/myclass">Class</Link>
          </div>
          <div
            className={`${
              matchRoute("/contact") ? "text-yellow-25" : "text-richblack-50"
            }`}
          >
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>

      <div className="hidden items-center gap-x-4 md:flex">
        {token === null && (
          <Link to="/login">
            <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
              Log in
            </button>
          </Link>
        )}
        {token === null && (
          <Link to="/signup">
            <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
              Sign up
            </button>
          </Link>
        )}
        {token && (
          <div className="text-white">
            <ProfileDropDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

