const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { mongoose } = require("mongoose");

exports.message_list = asyncHandler(async (req, res, next) => {
    const allMessages = await Message.find({})
        .exec();
    console.log(allMessages);
    res.render("index", { title: "M List", messages: allMessages });
});

exports.message_create_get = (req, res, next) => {
    res.render("new", { title: "Create new pot" });
};

exports.message_create_post = [
    asyncHandler(async (req, res, next) => {
        const message = new Message({
            _id: new mongoose.Types.ObjectId(),
            userName: req.body.userName,
            userMessage: req.body.userMessage,
        });
            await message.save();
            res.redirect("/");
    }),
];