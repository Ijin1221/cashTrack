import express from 'express'
import { userRoutes } from './userRoutes.js';

export const router = express.Router();

router.use("/user",userRoutes)