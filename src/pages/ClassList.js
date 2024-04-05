import React, { useEffect, useState } from "react";
import { apiConnector } from "../services/apiconnector";
import { endpoints } from "../services/apis";
import ClassDetails from "./ClassDetails";
import { Link } from "react-router-dom";

const ClassList = () => {
  const [data, setData] = useState(null);

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
    <div className="flex gap-10">
      {data?.map((item) => (
        <Link to={`/class-details/${item._id}`} key={item._id}>
          {" "}
          {/* Enclose div within Link and specify correct URL */}
          <div className="bg-blue-100 p-5" >
            <h1>{item.className}</h1>
            <p>{item.classDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ClassList;
