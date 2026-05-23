import { Response } from "express";

interface ResponseData<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

// for sending the response;

const sendResponse = <T>(res: Response, payload: ResponseData<T>) => {
  res.status(payload.statusCode).json({
    success: payload.success,
    message: payload.message,
    data: payload.data,
  });
};

export default sendResponse;
