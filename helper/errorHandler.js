exports.resourceError = (res, message) => {
  res.status(400).json({ success: false, error: message });
};

exports.serverError = (res, error) => {
  console.log(error);
  res.status(500).json({
    success: false,
    error: "Server Error",
  });
};
