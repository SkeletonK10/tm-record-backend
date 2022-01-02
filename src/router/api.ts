import { RequestHandler } from 'express';

const mainMsg: string = `Hello, this is the backend server for Terraforming Mars Recording system!<br>
  See /api-docs for API specification.`;

export const mainGet: RequestHandler = (req, res, next) => {
  res.status(200).send(mainMsg);
  return next();
};
