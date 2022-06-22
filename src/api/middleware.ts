import { NextFunction } from "express";

const loggingMiddleware = (req: Request, _: Response, next: NextFunction) => {
  // @ts-ignore
  const { ip, url, query, params, body } = req;
  console.log(`HTTP request (${url})`, {
    request: {
      ip,
      url,
      query,
      params,
      body,
    },
  });

  next();
};

export default { loggingMiddleware };
