import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "../../../middlewares/validateRequest";
import * as NotesController from "./notes.controller";
import { notesSchema } from "./notes.schema";

export const notesRouter = Router();

notesRouter.get("/", NotesController.findAll);
notesRouter.get(
  "/:id",
  validateRequest({ params: notesSchema.pick({ id: true }) }),
  NotesController.findOne
);
notesRouter.post(
  "/",
  validateRequest({ body: notesSchema }),
  NotesController.findOne
);
