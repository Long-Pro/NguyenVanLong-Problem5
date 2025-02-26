import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import createError from 'http-errors';
import morgan from 'morgan';

import Joi from 'joi';
import router from '../api/index.route';
import env from '../configs/env.config';
import ApiResponse from '../utils/api-response';

export default async function loadExpress() {
  const app = express();

  app.use(cors({ origin: '*' }));
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  //router
  app.use(router);

  // Error Handling Middleware called

  app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
  });

  // error handler middleware
  app.use(
    (
      error: createError.HttpError,
      req: Request,
      res: Response,
      next: NextFunction,
    ) => {
      console.log('error', error);
      const status = error.status || (Joi.isError(error) ? 400 : 500);
      const message = error.message || 'Internal Server Error';
      res.status(status).json(new ApiResponse({ message }));
    },
  );
  app.listen(env.app.port, () => {
    console.log(`App is running on port ${env.app.port}`);
  });
}
