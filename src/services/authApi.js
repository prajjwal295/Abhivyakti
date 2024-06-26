import toast from "react-hot-toast";
import { apiConnector } from "./apiconnector";
import { endpoints } from "./apis";
import { setToken, setSignupData } from "../utils/authSlice";
import { setUser } from "../utils/profileSlice";

const {
  LOGIN_API,
  SENDOTP_API,
  SIGNUP_API,
} = endpoints;

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
      });

      console.log("SEND OTP API Response.....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP SENT Successfull");
      navigate("/verify-email");
    } catch (error) {
      console.log("OTP SENT ERROR............", error);
      toast.error("OTP SENT Failed");
    }

    toast.dismiss(toastId);
  };
}




export function signup(
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  contactNumber,
  accountType,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        contactNumber,
        accountType,
        otp,
      });

      console.log("Signup API Response.....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Signup Successfull");
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user))
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("Signnp API ERROR............", error);
      toast.error("Signup Failed");
    }

    toast.dismiss(toastId);
  };
}

export function logOut(navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    dispatch(setSignupData(null));
    dispatch(setToken(null));
    dispatch(setUser(null));

    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("Login API Response.....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successfull");
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }

    toast.dismiss(toastId);
  };
}

