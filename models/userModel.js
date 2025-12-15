import { pool } from "../dBconfig.js";
import bcrypt from 'bcrypt';

export const userRegisterMdl = async (details) => {
  const connection = await pool.getConnection();

  try {
    if ( !details.createrId || !details.userName || !details.email || !details.pwd || !details.creatingRole ) {
      return "invalidInput";
    };

    const [isCreaterExist] = await connection.query(`SELECT id, role FROM users WHERE id = ?`, [details.createrId]);
    if ( !isCreaterExist.length ) {
      return "creatorNotFound";
    };

    const authorization = isCreaterExist[0].role === "sAdm" || (isCreaterExist[0].role === "adm" && details.creatingRole === "mngr");
    if ( !authorization ) {
      return "notAuthorized";
    };

    const [sAdmCount] = await connection.query(`SELECT COUNT(*) AS count FROM users WHERE role = 'sAdm'`);
    if ( details.creatingRole === "sAdm" && sAdmCount[0].count > 2) {
      return "3rdsAdm";
    };

    const [ isUserExists ] = await connection.query(`SELECT id FROM users WHERE email = ?`, [details.email]);
    if ( isUserExists.length) {
      return "userExists";
    };

    const hashPwd = await bcrypt.hash(details.pwd, 10);
    await connection.query(`INSERT INTO users (role, c_by, name, email, pwd) VALUES(?, ?, ?, ?, ?)`, [details.creatingRole, details.createrId, details.userName, details.email, hashPwd]);

    return "success";
  } catch (err) {
    console.log(err);
    return "error";
  } finally {
    connection.release();
  }
};