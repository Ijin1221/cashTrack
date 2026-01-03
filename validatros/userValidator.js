import Joi from "joi";
import validate from "../middleware/validateMiddleware.js";

export const userRegisterBodyScheema = Joi.object({
  userName: Joi.string().trim().min(3).required(), 
  email : Joi.string().email().required(),
  pwd : Joi.string().min(6).required(),
  creatingRole : Joi.string().valid('sAdm','adm','mngr').required()
});

export const userRegisterQueryScheema = Joi.object({
  createrId : Joi.number(),
});

export const userRegisterBodyValidate = validate(userRegisterBodyScheema, 'body');
export const userRegisteraQueryVlidate = validate(userRegisterQueryScheema, 'query');