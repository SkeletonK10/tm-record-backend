import { RequestHandler } from "express";

export const non_impl = (req, res, next): RequestHandler => {
  res.status(501).json({ text: "No implementation here" });
  return next();
};
