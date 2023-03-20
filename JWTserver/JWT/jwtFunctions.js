const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const generateToken = (id, expireTime) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const options = {
      expiresIn: expireTime,
      issuer: "xyz@example.com",
      audience: id,
    };

    jwt.sign(payload, process.env.jwtAccessToken, options, (err, token) => {
      if (err) console.log("error found");
      resolve(token);
    });
  });
};

const signAccessToken = async (id) => await generateToken(id, "1d");
const verifyAccessToken = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) return next(createError.Unauthorized());
  jwt.verify(token, process.env.jwtAccessToken, (error, payload) => {
    if (error) return next(createError.Unauthorized());
    req.payload = payload;
  });
  next();
};
module.exports = { signAccessToken, verifyAccessToken };
