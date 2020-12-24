"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const UserDao_mock_1 = __importDefault(require("@daos/User/UserDao.mock"));
const router = express_1.Router();
const userDao = new UserDao_mock_1.default();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
/******************************************************************************
 *                                     Export
 ******************************************************************************/
exports.default = router;
