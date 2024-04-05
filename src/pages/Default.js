import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiConnector } from "../services/apiconnector";
import { endpoints } from "../services/apis";
import { jwtDecode } from "jwt-decode";
import { setUserId } from "../utils/profileSlice";
import axios from "axios";
import { setUser } from "../utils/profileSlice";

const Default = () => {
  const token = useSelector((store) => store.auth.token);

  console.log({ token });

  const dispatch = useDispatch();

  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await axios.get(endpoints.GET_USER, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });

          const userProfileData = response?.data?.profileData[0];

          console.log({ userProfileData });

          setUserData({...userProfileData});
          console.log({ userData });
          dispatch(setUser(userData));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchData();
    }
  }, [token]);

  // Optionally, handle the case where user is still null (e.g., loading state)
  if (userData === null) {
    return <div>Loading...</div>;
  }

  // Render user data once it's fetched
  return (
    <div>
      <h1>User Details</h1>
    </div>
  );
};

export default Default;
