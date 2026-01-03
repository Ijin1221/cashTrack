import { userRegisterMdl } from "../models/userModel.js";

export const userRegisterCtrl = async (req, res) => {
  const { createrId } = req.query;
  const { userName, email, pwd, creatingRole } = req.body;
  const details = {
    createrId, userName, email, pwd, creatingRole
  };
  const result = await userRegisterMdl(details);
  res.send(result);
  console.log(result);
};