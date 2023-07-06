const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    _id: mongoose.Schema.ObjectId,
    userName: { type: String, required: true },
    userMessage: { type: String, required: true },
});


module.exports = mongoose.model("Messages", messageSchema);
