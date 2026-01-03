import express from 'express'
import { userRegisterCtrl } from '../controller/userController.js';
import { userRegisteraQueryVlidate, userRegisterBodyValidate } from '../validatros/userValidator.js';

export const userRoutes = express.Router();

userRoutes.post("/userRegister", 
  userRegisteraQueryVlidate, 
  userRegisterBodyValidate, 
  userRegisterCtrl);