import { RequestHandler } from 'express';

export const nonImpl: RequestHandler = (req, res, next) => {
  res.status(501).json({ text: 'No implementation here' });
  return next();
};

export const nonImpl1: RequestHandler = (req, res, next) => {
  res.status(501).json({ text: 'No implementation here' });
  return next();
};
