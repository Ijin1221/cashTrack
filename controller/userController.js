import { userRegisterMdl } from "../models/userModel.js";

export const userRegisterCtrl = async (req, res) => {
  const { createrId, userName, email, pwd, creatingRole } = req.body;
  const details = {
    createrId, userName, email, pwd, creatingRole
  };

  const result = userRegisterMdl(details);
};