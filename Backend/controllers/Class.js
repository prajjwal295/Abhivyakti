const Class = require("../models/Class");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// create course

exports.createClass = async (req, res) => {
  try {
    const { className, classDescription } = req.body;
    // const { thumbnail } = req.files;

    // validation
    if (!className || !classDescription) {
      return res.status(400).json({
        success: false,
        message: "All fields are required in course creation",
      });
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    const instructorDetails = await User.findById(userId);

    // console.log("Instructor details :", instructorDetails);

    if (!instructorDetails) {
      return res.status(400).json({
        success: false,
        message: "Instructor not found ",
      });
    }

    // console.log({ thumbnail });

    // // upload image to cdn

    // const thumbnailImage = await uploadImageToCloudinary(
    //   thumbnail,
    //   process.env.FOLDER_NAME
    // );

    // create an entry for new class

    const newClass = await Class.create({
      className,
      classDescription,
      instructor: instructorDetails._id,
      thumbnail: null,
      // thumbnail: thumbnailImage.secure_url,
    });

    // add the new cousre to instructor user

    await User.findByIdAndUpdate(
      {
        _id: instructorDetails._id,
      },
      {
        class: newClass._id,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "class created Successfully",
      data: newClass,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "class created failed",
    });
  }
};

// // get all courses

exports.showAllClasses = async (req, res) => {
  try {
    const allClasses = await Class.find(
      {},
      {
        className: true,
        classDescription: true,
        instructor: true,
        studentEnrolled: true,
        thumbnail: true,
      }
    )
      .populate("instructor")
      .populate("studentsEnrolled")
      .exec();

    return res.status(200).json({
      success: true,
      message: "All  Classes returned successfully",
      allClasses,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "class getting failed",
    });
  }
};

exports.getInstructorClasses = async (req, res) => {
  try {
    const instructorId = req.user.id;

    const instructorClasses = await Class.find({
      instructor: instructorId,
    }).sort({ createdAt: -1 });

    // Return the instructor's courses
    res.status(200).json({
      success: true,
      data: instructorClasses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve instructor courses",
      error: error.message,
    });
  }
};

exports.getClassDetails = async (req, res) => {
  try {
    // console.log(req);
    const { classId } = req.body;

    // console.log({ classId });

    const classDetails = await Class.findById({ _id: classId })
      .populate({
        path: "instructor",
      })
      // .populate("studentEnrolled")
      .exec();

    // validation
    if (!classDetails) {
      return res.status(400).json({
        success: false,
        message: `could not find the course with ${classId}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Found the class with ${classId}`,
      classDetails,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "class with all details fetched failed",
    });
  }
};

exports.enrollStudents = async (req, res) => {
  const { classId } = req.body;
  const userId = req.user.id;
  if (!classId || !userId) {
    return res.status(400).json({
      success: false,
      message: "Please Provide data for class or UserId",
    });
  }

  try {
    const checkEnrolled = await User.findOne({ class: classId });

    if (checkEnrolled) {
      return res
        .status(500)
        .json({ success: false, message: "Student is Already Enrolled" });
    }
    const enrolledClass = await Class.findByIdAndUpdate(
      classId,
      { $push: { studentsEnrolled: userId } }, // Use $addToSet to prevent duplicates
      { new: true }
    );

    if (!enrolledClass) {
      return res
        .status(500)
        .json({ success: false, message: "Class not Found" });
    }

    const enrolledStudent = await User.findByIdAndUpdate(
      userId,
      {
        class: classId,
      },
      { new: true }
    );

    // console.log({ enrolledClass });

    return res.status(200).json({
      success: true,
      message: `student is enrolled`,
      enrolledClass,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
