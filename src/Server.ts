import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
const Tracing = require("@sentry/tracing");
import * as Sentry from "@sentry/node";

import express, { NextFunction, Request, Response } from 'express';

import StatusCodes from 'http-status-codes';

import 'express-async-errors';

import BaseRouter from './routes';
import logger from '@shared/Logger';

const app = express();

Sentry.init({
  dsn: process.env.SENTRY,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ 
      // to trace all requests to the default router
      app, 
      // alternatively, you can specify the routes you want to trace:
      // router: someRouter, 
    }),
  ],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const { BAD_REQUEST } = StatusCodes;

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

// Add APIs
app.use('/v1', BaseRouter);


// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

// Export express instance
export default app;
