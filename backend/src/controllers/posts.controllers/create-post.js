module.exports = async (req, res) => {
  return res
    .status(201)
    .json({ statusText: "Sucessfully created a post", data: {} });
};
