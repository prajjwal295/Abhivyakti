import React from "react";
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom";

const StudentList = ({ StudentList }) => {
  console.log({ StudentList });

  return (
    <div className="flex flex-col bg-richblack-800 p-5 h-[92vh] text-richblue-100 gap-5">
      <div className="border-b-2">Enrolled Students</div>
      <div className="flex flex-col gap-3 ">
        {StudentList?.map((item, index) => (
          <Link to="" key={index}>
            <StudentCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
