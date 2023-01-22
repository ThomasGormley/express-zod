import express from "express";

export const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  return res.json({ status: "ok" });
});
