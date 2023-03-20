const express = require("express");
const morgan = require("morgan");
const createError = require("http-error");
const cors = require("cors");
const authRouter = require("./routes/auth.route");

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);

app.listen(5001, () => {
  console.log("run in port 5000");
});
