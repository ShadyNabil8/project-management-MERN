const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const dbConnect = require("./config/db");
const { errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

const tokenRouter = require("./routes/tokenRoute");
app.use("/refresh-token", tokenRouter);

const userRouter = require("./routes/userRoute");
app.use("/user", userRouter);

const workspaceRouter = require("./routes/workspaceRoute");
app.use("/workspaces", workspaceRouter);

app.use("/images", express.static("public/images"));

app.use(errorHandler);

dbConnect();

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
