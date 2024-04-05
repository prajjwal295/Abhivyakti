import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logos.png";
import CTAbutton from "./CTAButton";

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
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=" border-white w-[30%]"
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

      <div className="flex gap-2 ">
        {!token && (
          <CTAbutton active={false} linkTo={"/login"}>
            Login
          </CTAbutton>
        )}
        {!token && (
          <CTAbutton active={false} linkTo={"/signup"}>
            Sign in
          </CTAbutton>
        )}

        {token && (
          <CTAbutton linkTo={"/cart"} active={false}>
            Cart
          </CTAbutton>
        )}

        {/* {token && (
            <button
              className="text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95 bg-richblack-800 text-white"
              onClick={() => {
                dispatch(logOut(navigate));
              }}
            >
              LogOut
            </button>
          )} */}
      </div>
    </div>
  );
};

export default NavBar;
