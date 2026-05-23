import getUserFromDB from "./user.service";
import sendResponse from "../../utils/sendResponse";

import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
  // collecting the user info;

  const user = getUserFromDB();

  // after sending the response;

  sendResponse(res, {
    statusCode: 200,
    message: "user data fetched successfully",
    success: true,
    data: user,
  });
};

export default getUser;
