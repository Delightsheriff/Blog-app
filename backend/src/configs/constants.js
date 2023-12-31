module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  postCategories: ["health", "tech", "music"],
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_REFRESH_SECRET_KEY: process.env.JWT_REFRESH_SECRET_KEY,
};
