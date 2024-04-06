import React from "react";
import Instructor from "../assets/Images/Instructor.png";
import { FaArrowRight } from "react-icons/fa";
import CodeBlock from "../components/CodeBlock";
import logo from "../assets/about.jpeg";

const About = () => {
  return (
    <div>
      <div className="p-10 h-[90vh] flex my-auto">
        <CodeBlock
          position={"flex-row"}
          heading={
            <div className="mx-auto font-semibold text-5xl text-white">
              Empowering teachers with real-time
              <span className="mx-2 text-yellow-50 ">real-time</span>
              student insights.
            </div>
          }
          subHeading={
            "Welcome to our platform! We utilize advanced image analysis technology to provide instructors with real-time reports on students' actions, attention, and emotions. Our system generates reports for individual students and the class as a whole. High-attention behaviors include focused attention and raising hands, while low-attention behaviors encompass feeling bored, eating/drinking, laughing, reading, using a phone, being distracted, and writing. Join us in creating engaging and effective classroom environments tailored to every student's needs."
          }
          ctabtn1={{
            btnText: "",
            linkTo: "/about",
            active: true,
          }}
          ctabtn2={{
            btnText: "",
            linkTo: "/about",
            active: false,
          }}
          img={logo}
          // codeBlock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          // codeColor={"text-yellow-25"}
          backgroundGradient={<div className="codeblock1 absolute"></div>}
        ></CodeBlock>
      </div>
    </div>
  );
};

export default About;
