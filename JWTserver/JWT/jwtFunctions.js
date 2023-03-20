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

module.exports = { signAccessToken };
