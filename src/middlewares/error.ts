import { NextFunction, Request, Response } from "express";
import { config } from "../config";
import { ApiError } from "../error";

export const errorConverter = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!(err instanceof ApiError)) {
    const statusCode = 500;
    const message = err.message || "Something went wrong";
    next(new ApiError(statusCode, message, err.stack));
  }
  next(err);
};

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, status } = err;

  res.locals.errorMessage = err.message;

  const response = {
    code: status,
    message,
    ...(config.env === "development" && { stack: err.stack }),
  };

  if (config.env === "development") {
    console.error(err);
  }

  res.status(status).send(response);
};
