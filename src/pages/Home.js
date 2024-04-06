import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import logo from "../assets/home.jpeg";

const Home = () => {
  return (
    <div className="p-10 h-[90vh] flex my-auto">
      <CodeBlock
        position={"flex-row"}
        heading={
          <div className="mx-auto font-semibold text-5xl text-white">
            Revolutionize Classroom
            <span className="mx-2 text-yellow-50 ">AI-Powered</span>
            Attention Monitoring!
          </div>
        }
        subHeading={
          "Utilizing a machine learning approach, behavior recognition models for students were trained, enabling the identification of attention levels in the classroom through analysis of facial expressions."
        }
        ctabtn1={{
          btnText: "signup",
          linkTo: "/signup",
          active: true,
        }}
        ctabtn2={{
          btnText: "login",
          linkTo: "/Login",
          active: false,
        }}
        img={logo}
        // codeBlock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
        // codeColor={"text-yellow-25"}
        backgroundGradient={<div className="codeblock1 absolute"></div>}
      ></CodeBlock>
    </div>
  );
};

export default Home;
