import { RequestHandler } from 'express';

export const mainGet = (req, res, next): RequestHandler => {
  res
    .status(200)
    .json({ text: 'GO WORK FRONTEND WE DO NOT HAVE ANY INFORMATION FOR IT' });
  return next();
};

export const nonImpl = (req, res, next): RequestHandler => {
  res.status(501).json({ text: 'No implementation here' });
  return next();
};
