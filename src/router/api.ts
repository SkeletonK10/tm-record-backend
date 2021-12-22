import { RequestHandler } from 'express';

export const mainGet: RequestHandler = (req, res, next) => {
  res
    .status(200)
    .json({ text: 'GO WORK FRONTEND WE DO NOT HAVE ANY INFORMATION FOR IT' });
  return next();
};
