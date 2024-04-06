import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const VideoHome = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/Room/${value}`);
  }, [navigate, value]);

  return (
    <div className="">
      <h1 style={{ color: "red" }}>For testing Purpose use room code 12!</h1>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "16px",
        }}
      />
      <button
        onClick={handleJoinRoom}
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Join
      </button>
    </div>
  );
};

export default VideoHome;
