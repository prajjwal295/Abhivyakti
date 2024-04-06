import React from "react";
import CTAbutton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";

const CodeBlock = ({
  position,
  heading,
  subHeading,
  ctabtn1,
  ctabtn2,
  img,
  //   codeBlock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-10 gap-48 `}>
      {/* section 1 */}
      <div className="max-w-[45%] flex flex-col gap-8 ">
        {heading}
        <div className="mx-auto text-richblack-300  text-start text-xl font-bold ">
          {subHeading}
        </div>
        <div className="flex gap-7 my-5">
          <CTAbutton active={ctabtn1.active} linkTo={ctabtn1.linkTo}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAbutton>

          <CTAbutton active={ctabtn2.active} linkTo={ctabtn2.linkTo}>
            {ctabtn2.btnText}
          </CTAbutton>
        </div>
      </div>

      {/* section 2 */}

      <div className="relative shadow-[12px_12px_0_0] shadow-richblack-5 w-11/12 max-w-[450px] max-h-[380px] border-2 border-white shadow-[10px_-5px_50px_-5px] shadow-blue-200">
        <img src={img} className="h-full"></img>
      </div>
    </div>
  );
};

export default CodeBlock;
