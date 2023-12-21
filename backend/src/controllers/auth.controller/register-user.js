const constants = require("../../configs/constants");
const User = require("../../models/user.model");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const schema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
  username: Joi.string().required(),
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
    const userExist = await User.findOne({ email: body.email });
    if (userExist) {
      return res
        .status(409)
        .json({ error: "User already exist", statusText: "fail" });
    }

    if (body.password !== body.confirmPassword) {
      return res.status(400).json({
        error: "Password and confirmed password does not match",
        statusText: "fail",
      });
    }

    const password = await bcrypt.hash(body.password, 10);
    const user = await User.create({ ...body, password });
    if (!user) {
      console.log("error");
      return;
    }
    console.log(user);
    return res
      .status(201)
      .json({ statusText: "Sucessfully registered a User", data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
