const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const { errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const { swaggerUi, swaggerSpec } = require("./config/swagger");
const app = express();

if (process.env.NODE_ENV !== "test") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
} else {
  app.use(cors());
}

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

const tokenRouter = require("./routes/tokenRoute");
app.use("/refresh-token", tokenRouter);

const userRouter = require("./routes/userRoute");
app.use("/user", userRouter);

const workspaceRouter = require("./routes/workspaceRoute");
app.use("/workspace", workspaceRouter);

const spaceRouter = require("./routes/spaceRoute");
app.use("/space", spaceRouter);

const listRouter = require("./routes/listRoute");
app.use("/list", listRouter);

const workspaceInvitationRouter = require("./routes/workspaceInvitationRoute");
app.use("/workspace-invitation", workspaceInvitationRouter);

app.use("/images", express.static("public/images"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
  dbConnect();

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log(
      `Swagger docs available at http://localhost:${process.env.PORT}/api-docs`
    );
  });
}

module.exports = app;
