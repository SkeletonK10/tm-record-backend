import { RequestHandler } from 'express';

export const nonImpl = (req, res, next): RequestHandler => {
  res.status(501).json({ text: 'No implementation here' });
  return next();
};

export const nonImpl1 = (req, res, next): RequestHandler => {
  res.status(501).json({ text: 'No implementation here' });
  return next();
};
