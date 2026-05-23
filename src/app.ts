import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// here is the main logic file;
import userRoutes from "./modules/user/user.routes";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("server is running sucessfully");
});

// setting the final routes;

app.use("/api/users", userRoutes);

// adding the error middleware
app.use(globalErrorHandler);

export default app;
