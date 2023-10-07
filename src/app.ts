import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import httpStatus from "http-status";
import morgan from "morgan";
import globalExceptionHandler from "./app/middlewares/globalExceptionHandler";
import routes from "./app/routes";
import config from "./config";

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

if (config.env === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1", routes);

app.use(globalExceptionHandler);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
    errorMessages: [
      {
        path: "",
        message: "API not found",
      },
    ],
  });
});

export default app;
