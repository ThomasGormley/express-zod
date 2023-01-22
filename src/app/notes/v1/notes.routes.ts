import { Router } from "express";
import * as NotesController from "./notes.controller";

export const notesRouter = Router();

notesRouter.get("/", NotesController.findAll);
notesRouter.get("/:id", NotesController.findOne);
