const mongoose = require("mongoose");
const mailSender = require("../utils/mailSend");

const statSchema = new mongoose.Schema({

});

module.exports = mongoose.model("Stats", statSchema);
