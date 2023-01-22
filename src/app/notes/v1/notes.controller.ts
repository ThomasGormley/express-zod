import { NextFunction, Request, Response } from "express";

export const findAll = (
  req: Request,
  res: Response<any[]>,
  next: NextFunction
) => {
  return ["abc"];
};

export function findOne(
  req: Request,
  res: Response<any[]>,
  next: NextFunction
) {
  return ["abc"];
}
