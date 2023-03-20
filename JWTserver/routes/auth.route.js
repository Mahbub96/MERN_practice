const express = require("express");
const { signAccessToken } = require("../JWT/jwtFunctions");

const router = express.Router();

router.get("/", (req, res, next) => {});

router.post("/login", async (req, res, next) => {
  const { ID, Pass } = req.body;
  const accessToken = await signAccessToken(ID);

  res.send({ accessToken });
});

module.exports = router;
