import { NextFunction, Request, Response } from "express";
import { Note } from "./notes.schema";

export const findAll = (
  req: Request,
  res: Response<Note>,
  next: NextFunction
) => {
  return res.json({
    id: "qweqds",
    description: "description",
    hidden: false,
    status: "archived",
    title: "title",
  });
};

export function findOne(req: Request, res: Response<any>, next: NextFunction) {
  throw new Error("test error");
  return res.json({ status: "ok" });
}
