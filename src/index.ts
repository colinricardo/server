import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";
import express from "express";
import { createServer } from "http";
import apiMiddleware from "./api/middleware";
import apiRouter from "./api/router";
import { PORT, WEB_APP_URL } from "./environment";
const REQUEST_BODY_SIZE_LIMIT = "50mb";

const main = async () => {
  const app = express();

  var corsOptions: CorsOptions = {
    origin: [WEB_APP_URL!],
    credentials: true,
  };

  app.use(cookieParser());
  app.use(cors(corsOptions));
  app.use(bodyParser.json({ limit: REQUEST_BODY_SIZE_LIMIT }));

  // @ts-ignore
  app.use(apiMiddleware.loggingMiddleware);

  app.use("/api", apiRouter);

  // Return 404 on all other routes.
  app.use((_, res) => {
    return res.status(404).send({ message: "This route does not exist." });
  });

  const httpServer = createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`API started on port ${PORT} 🎉`);
  });
};

main();
