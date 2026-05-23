import { Request, Response, NextFunction } from "express";

const globalErrorHandler = (
  err: any,
  res: Response,
  req: Request,
  next: NextFunction,
) => {
  // this the eerror code;
  const statusCode = err.statusCode || 500;

  // sending the error message;
  res.status(statusCode).json({
    success: false,
    message: err.message || "something went wrong",
  });
};

// exporting
export default globalErrorHandler;
