/* Endpoint API: RequestHandler */

import { RequestHandler } from 'express';

/* nonImpl; status 501 Not Implemented */
export const nonImpl: RequestHandler = (req, res, next) => {
  res.status(501).json({ text: 'No implementation here' });
  return next();
};
