import express from "express";
import { notesRouter } from "./app/notes/v1/notes.routes";

export const app = express();

app.use(express.json());
app.use(notesRouter);
app.get("/health", (req, res) => {
  return res.json({ status: "ok" });
});
