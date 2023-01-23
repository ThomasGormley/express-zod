import { NextFunction, Request, Response } from "express";
import { config } from "../config";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    code: 500,
    message,
    ...(config.env === "development" && { stack: err.stack }),
  };

  if (config.env === "development") {
    console.error(err);
  }

  res.status(500).send(response);
};
