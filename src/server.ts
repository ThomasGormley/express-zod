import express from "express";
import { notesRouter } from "./app/notes/v1/notes.routes";
import { errorConverter, errorHandler } from "./middlewares/error";

export const app = express();

app.use(express.json());
app.use("/v1/notes", notesRouter);
app.get("/health", (req, res) => {
  return res.json({ status: "ok" });
});

app.use(errorConverter);
app.use(errorHandler);
