/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import UserDao from '@daos/User/UserDao.mock';
import { paramMissingError, IRequest } from '@shared/constants';

const router = Router();
const userDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;





/******************************************************************************
 *                                     Export
******************************************************************************/

export default router;
