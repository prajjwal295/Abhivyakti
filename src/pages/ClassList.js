import React, { useEffect, useState } from "react";
import { apiConnector } from "../services/apiconnector";
import { endpoints } from "../services/apis";
import ClassDetails from "./ClassDetails";
import { Link } from "react-router-dom";
import Class from "./Class";
import { useSelector } from "react-redux";

const ClassList = () => {
  const [data, setData] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  const user = useSelector((store) => store.profile.user);

  useEffect(() => {
    const getApi = async () => {
      const response = await apiConnector("GET", endpoints.GET_CLASS);

      console.log({ response });
      const res = response?.data?.allClasses;
      setData(res);
    };

    getApi();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex gap-10 flex-col items-start px-10">
        <div className="text-center text-4xl font-semibold mt-7 text-white">
          <h1>Class List</h1>
        </div>
        <div className="flex gap-10 h-[50%] ">
          {data?.map((item) => (
            <Link to={`/class-details/${item._id}`} key={item._id}>
              <div className="flex flex-col p-6 space-y-6 transition-all w-[400px] h-[150px] duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={item?.instructor?.image}
                    alt="image"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="mb-3 text-xl font-bold lg:text-2xl">
                    {item?.className}
                  </h5>
                  <p className="mb-6 text-lg text-gray-600">
                    by happy singh
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {showCreate ? (
          <div
            className={`text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95 bg-richblack-800 text-white
                
            `}
            onClick={() => {
              setShowCreate(!showCreate);
            }}
          >
            Cancel Create
          </div>
        ) : user?.accountType === "Instructor" ? (
          <div
            className={`text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 hover:scale-95 bg-yellow-50   text-black
                
            `}
            onClick={() => {
              setShowCreate(!showCreate);
            }}
          >
            Create New Class
          </div>
        ) : (
          ""
        )}

        {showCreate && (
          <>
            <Class setShowCreate={setShowCreate} />
          </>
        )}
      </div>
    </div>
  );
};

export default ClassList;
