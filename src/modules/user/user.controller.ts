import getUserFromDB from "./user.service";
import sendResponse from "../../utils/sendResponse";
import asyncHandler from "../../utils/asyncHandler";
import AppError from "../../errors/AppError";

import { Request, Response } from "express";

const getUser = asyncHandler(async (req: Request, res: Response) => {
  // getting the user;
  const user = getUserFromDB();
  //throw new AppError(400, "testing custom error error middleware");

  // sending the reponse;
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "user data fetched successfully",
    data: user,
  });
});

export default getUser;
