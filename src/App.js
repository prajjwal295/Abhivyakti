import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { useNavigate } from "react-router-dom";
import VerifyEmail from "./pages/VerifyEmail";
import Default from "./pages/Default";
import { useSelector } from "react-redux";
import MyProfile from "./components/MyProfile";
import Class from "./pages/Class";
import ClassList from "./pages/ClassList";
import ClassDetails from "./pages/ClassDetails";
import Login from "./pages/Login";
import OpenRoute from "./components/OpenRoute";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import VideoHome from "./VideoCall/VideoHome";
import VideoPage from "./VideoCall/VideoPage";
import { BrowserRouter as Router } from "react-router-dom";
import Stats from "./components/Stats";

const App = () => {
  const token = localStorage.getItem("token") || "";
  const { user } = useSelector((state) => state.profile);

  // const token = useSelector((store) => store.auth.token);

  // const navigate = useNavigate();

  // React.useLayoutEffect(() => {
  //   if (!token) {
  //     navigate("/", { replace: true });
  //   }
  // }, [token]);
  return (
    <div className="max-w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="stats" element={<Stats />} />
        </Route>

        <Route path="/verify-email" element={<VerifyEmail />} />

        <Route path="/home" element={<Default />} />
        <Route
          path="/create-class"
          element={
            <PrivateRoute>
              <Class />
            </PrivateRoute>
          }
        />
        <Route
          path="/myclass"
          element={
            <PrivateRoute>
              <ClassList />
            </PrivateRoute>
          }
        />
        <Route
          path="/class-details/:id"
          element={
            <PrivateRoute>
              <ClassDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/class-details/:id/join-meet"
          element={
            <PrivateRoute>
              <VideoHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/class-details/:id/start-meet"
          element={
            <PrivateRoute>
              <VideoPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
