import { Request, Response, NextFunction } from "express";

// this type denotes the function which return the promise base 3 parameter function
type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<any>;

// lets make the actual function;

const asyncHandler =
  (fn: AsyncFunction) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
export default asyncHandler;
