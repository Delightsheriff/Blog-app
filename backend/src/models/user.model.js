const { Schema, model } = require("mongoose");
// const constants = require("../configs/constants");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      lowercase: true,
    },
    lastName: {
      type: String,
      lowercase: true,
    },
    gender: {
      type: String,
      lowercase: true,
      enum: ["male", "female"],
    },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;
