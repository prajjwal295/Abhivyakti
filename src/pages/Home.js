import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div className="relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between">
        <div>tHIS IS TH PROJECT</div>
        <div>
          Our courses are designed and taught by industry experts who have years
          of experience in coding and are passionate about sharing their
          knowledge with you.
        </div>
        <Link to={"/signup"}>
          <div
            className={`text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95 bg-yellow-50   text-black
                
            `}
          >
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
