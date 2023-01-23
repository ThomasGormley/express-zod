import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../../../error";
import {
  TypedRequestBody,
  TypedRequestParams,
} from "../../../middlewares/validateRequest";
import { Note, notesIdOnlySchema, notesSchema } from "./notes.schema";
import * as notesService from "./notes.service";

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

export function findOne(
  req: TypedRequestParams<typeof notesIdOnlySchema>,
  res: Response<any>,
  next: NextFunction
) {
  // search db for record
  const note = notesService.findNote(req.params.id);

  if (!note) {
    throw new NotFoundError("note not found");
  }
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
