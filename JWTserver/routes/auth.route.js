const express = require("express");
const { signAccessToken } = require("../JWT/jwtFunctions");
const { verifyAccessToken } = require("../JWT/jwtFunctions");
const router = express.Router();

router.get("/", verifyAccessToken, async (req, res, next) => {
  const { aud } = req.payload;

  res.send({ id: aud });
});

router.post("/login", async (req, res, next) => {
  const { ID, Pass } = req.body;
  const accessToken = await signAccessToken(ID);

  res.send({ accessToken, ID });
});

module.exports = router;
