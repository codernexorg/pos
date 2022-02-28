const sendToken = async (user, res, statusCode) => {
  const token = await user.generateToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: true,
  };
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token, user });
};

export default sendToken;
