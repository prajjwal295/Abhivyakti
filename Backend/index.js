const express = require("express");
const app = express();

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

require("dotenv").config();
const Port = process.env.PORT || 4000;

// db connect
database.connect();

const userRoutes = require("./routes/User");
const classRoutes = require("./routes/Class");

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp" }));

cloudinaryConnect();

// routeser

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/class", classRoutes);
// app.use("/api/v1/profile", profileRoutes);

// app.use("/api/v1/payment", paymentRoutes);

// default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is running",
  });
});

// activate server
app
  .listen(Port, () => {
    console.log(`app listens at ${Port}`);
  })
  .on("error", (err) => {
    console.error("Server start error:", err);
  });
