const express = require("express");

const router = express.Router();

const { auth, isInstructor, isStudent } = require("../middlewares/auth");

const {
  showAllClasses,
  createClass,
  getClassDetails,
  enrollStudents,
  getInstructorClasses,
} = require("../controllers/Class");

router.post("/createClass", auth, isInstructor, createClass);
router.get("/showAllClass", showAllClasses);
router.get("/instructorClasses", getInstructorClasses);
router.post("/getClassDetails", getClassDetails);
router.post("/enrollStudent", auth, isStudent, enrollStudents);


module.exports = router;
