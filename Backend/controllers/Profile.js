const User = require("../models/User");
const Profile = require("../models/Profile");

exports.getProfile = async (req, res) => {
  console.log("req", req.user);
  try {
    const { id } = req.user;

    if (!id) {
      res.status(400).json({
        success: false,
        message: "User id is not available",
      });
    }

    const profileData = await User.find(
      { _id: id },
      {
        firstName: true,
        lastName: true,
        email: true,
        accountType: true,
        additionalDetails: true,
        course: true,
        image: true,
        stats: true,
      }
    )
      .populate("additionalDetails")
      .populate("stats")
      .exec();

    res.status(200).json({
      success: true,
      message: "Profile send Successfully",
      profileData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Profile data sent failed",
    });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User id is not available",
      });
    }

    const profileData = await User.findById(id)
      .select({
        firstName: true,
        lastName: true,
        email: true,
        accountType: true,
        additionalDetails: true,
        course: true,
        image: true,
        stats: true,
      })
      .populate("additionalDetails")
      .populate("stats")
      .exec();

    if (!profileData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile sent successfully",
      profileData,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Profile data sending failed",
    });
  }
};


exports.updateProfile = async (req, res) => {
  try {
    const {
      firstName = "",
      lastName = "",
      dob = "",
      about = "",
      contact = "",
      gender = "",
    } = req.body;
    const id = req.user.id;

    // Find the profile by id
    const userDetails = await User.findById(id);
    const profile = await Profile.findById(userDetails.additionalDetails);

    const user = await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
    });
    await user.save();

    // Update the profile fields
    profile.dob = dob;
    profile.about = about;
    profile.contact = contact;
    profile.gender = gender;

    // Save the updated profile
    await profile.save();

    // Find the updated user details
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
