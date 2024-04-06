import React from "react";
import { useState, useEffect } from "react";
import { apiConnector } from "../services/apiconnector";
import { endpoints } from "../services/apis";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentList from "./StudentList";

const ClassDetails = () => {
  const { id } = useParams();

  //   console.log({ id });

  const token = useSelector((store) => store.auth.token);

  const user = useSelector((store) => store.profile.user);

//   console.log({ user });

  const [data, setData] = useState({});

  const [enrolled, setEnrolled] = useState(false);

  const userClassDetails = user?.class;


  useEffect(() => {
    const getApi = async () => {
      console.log({ id });
      const response = await apiConnector("POST", endpoints.GET_CLASS_DETAILS, {
        classId: id,
      });

      console.log({ response });
      const res = response?.data?.classDetails;
    //   console.log({res})
      setData(res);
      console.log({data})

        if (id === userClassDetails) {
          setEnrolled(true);
          return;
        }
    };

    getApi();
  }, [id]);

  const handleEnrollment = async () => {
    try {
      const response = await apiConnector(
        "POST",
        endpoints.ENROLL_STUDENT,
        { classId: id },
        {
          Authorization: `Bearer ${token}`,
        }
      );
    //   console.log(response);
      setEnrolled(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleMeetStart =  () => {


  };
  const handleJoinMeet =  () => {};

  return (
    <div className="flex justify-between">
      <div>
        <StudentList StudentList={data?.studentsEnrolled} />
      </div>
      <div className="pr-10 pt-10">
        {user?.accountType === "Instructor" ? (
          <Link to={`/class-details/${id}/start-meet`}>
            <div
              className={`text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95 bg-[#0FFF50]   text-black
                
            `}
              // onClick={() => {
              //   handleMeetStart();
              // }}
            >
              Start Meet
            </div>
          </Link>
        ) : enrolled ? (
          <Link to={`/class-details/${id}/join-meet`}>
            <div
              className={`text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95  bg-[#0FFF50]   text-black
                
            `}
              // onClick={() => {
              //   handleJoinMeet();
              // }}
            >
              Join Meet
            </div>
          </Link>
        ) : (
          <div
            className={`text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95 bg-yellow-50   text-black
                
            `}
            onClick={() => {
              handleEnrollment();
            }}
          >
            Join Now
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassDetails;
