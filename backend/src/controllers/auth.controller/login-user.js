const constants = require("../../configs/constants");
const User = require("../../models/user.model");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const schema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

module.exports = async (req, res) => {
  const body = req.body;
  const { value, error } = schema.validate(body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).json({
      error: error.details.map((item) => item.message),
      statusText: "fail",
    });
  }

  try {
    const userExist = await User.findOne({ email: body.email }).select(
      "+password"
    );
    if (!userExist) {
      return res.status(400).json({
        error: "Invalid Email/password combination ",
        statusText: "fail",
      });
    }

    const isMatch = await bcrypt.compare(body.password, userExist.password);

    if (!isMatch) {
      return res.status(400).json({
        error: "Invalid Email/password combination ",
        statusText: "fail",
      });
    }

    const jwt = sign(
      { id: userExist._id, username: userExist.username },
      constants.JWT_SECRET_KEY
    );

    const refreshToken = sign(
      { id: userExist._id, username: userExist.username },
      constants.JWT_REFRESH_SECRET_KEY
    );

    return res
      .status(201)
      .json({ statusText: "Login Success", jwt, refreshToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
