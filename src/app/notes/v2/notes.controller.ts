import { NextFunction, Request, Response } from "express";
import { TypedRequestBody } from "../../../middlewares/validateRequest";
import { Note, notesSchema } from "./notes.schema";

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

export function create(
  req: TypedRequestBody<typeof notesSchema>,
  res: Response<Note>,
  next: NextFunction
) {
  // Runtime & compile time typesafe request body from the schema using requestValidator
  //    boolean
  const isHidden = req.body.hidden;
  //    published | archived
  const status = req.body.status;
  return res.json({
    id: "1a657d0c-b676-4bbf-9d18-d9ecb8547d8d",
    description: "description",
    hidden: false,
    status: "archived",
    title: "title",
  });
}
