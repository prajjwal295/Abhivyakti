import React from "react";
import { useState } from "react";
import { endpoints } from "../services/apis";
import { apiConnector } from "../services/apiconnector";
import { useSelector } from "react-redux";

const Class = ({ setShowCreate }) => {
  const token = useSelector((store) => store.auth.token);
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [error, setError] = useState("");

  //   const { className: name, classDescription: des } = data;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiConnector(
        "POST",
        endpoints.CREATE_CLASS,

        {
          className: name,
          classDescription: des,
        },

        {
          //   "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      console.log({ response });
      // Optionally, you can display a success message to the user
    } catch (error) {
      setError("Failed to create class. Please try again."); // Set error message
      console.error("Error creating class:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="flex flex-col  my-6 gap-3 ">
        <div className="flex gap-5">
          <div className=" flex flex-col gap-2 relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Enter Class Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              value={name}
              className=" bg-richblack-800 p-3 rounded-md cursor-text border-b-[1px] text-richblack-200"
              placeholder="Enter Class Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className=" flex flex-col gap-2 relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Enter Class Description <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              value={des}
              className=" bg-richblack-800 p-3 rounded-md cursor-text border-b-[1px] text-richblack-200"
              placeholder="Enter Class Description"
              onChange={(e) => {
                setDes(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        //   onClick={() => {
        //     setShowCreate(false);
        //   }}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Class;
