import React, { useEffect } from "react";
import { useState } from "react";
import { apiConnector } from "../services/apiconnector";
import { endpoints } from "../services/apis";

const StudentCard = ({ item }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      console.log({ item });
      const response = await apiConnector("POST", endpoints.GET_USER_BYID, {
        id: item,
      });

      console.log({ response });
      setUser(response);
      console.log({ user });
    };

    getApi();
  }, [item]);
  return (
    <div className="flex text-white items-center">
      <img
        src={user?.data?.profileData?.image}
        className="aspect-square w-[40px] rounded-full object-cover"
      />
      <h1>
        {user?.data?.profileData?.firstName}{" "}
        {user?.data?.profileData?.lasttName}
      </h1>
    </div>
  );
};

export default StudentCard;
