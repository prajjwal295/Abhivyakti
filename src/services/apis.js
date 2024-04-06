const BASE_URL = "http://localhost:4000/api/v1";

export const endpoints = {
  SENDOTP_API: "http://localhost:4000/api/v1/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  GET_USER: BASE_URL + "/auth/getProfile",
  GET_USER_BYID: BASE_URL + "/auth/getProfileById",
  CREATE_CLASS: BASE_URL + "/class/createClass",
  GET_CLASS: BASE_URL + "/class/showAllClass",
  GET_CLASS_DETAILS: BASE_URL + "/class/getClassDetails",
  ENROLL_STUDENT: BASE_URL + "/class/enrollStudent",
  INSTRUCTOR_CLASSES: BASE_URL + "/class/instructorClasses",
  UPDATE_PROFILE: BASE_URL + "auth/updateProfile",
};
