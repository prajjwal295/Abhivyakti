import React from "react";
import { useState, useEffect } from "react";
import { apiConnector } from "../services/apiconnector";
import { endpoints } from "../services/apis";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ClassDetails = () => {
  const { id } = useParams();

  //   console.log({ id });

  const token = useSelector((store) => store.auth.token);

  const [data, setData] = useState(null);

  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      console.log({ id });
      const response = await apiConnector("POST", endpoints.GET_CLASS_DETAILS, {
        classId: id,
      });

      console.log({ response });
      const res = response?.data?.allClasses;
      setData(res);
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
      console.log(response);
      setEnrolled(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      {enrolled ? (
        <div
          className={`text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95 bg-black-50   text-black
                
            `}
        >
          Joined
        </div>
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
  );
};

export default ClassDetails;
