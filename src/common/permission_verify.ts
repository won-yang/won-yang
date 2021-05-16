import { sendQuery } from '../config/db';

export const isLogin = (passport: any): boolean => {
  if (!passport) {
    return false;
  }
  return true;
};

export const isAdmin = async (passport: any): Promise<boolean> => {
  if (!isLogin(passport)) return false;

  const admin_rows: any[] = await sendQuery(`SELECT user_id FROM admin WHERE user_id = ?`, [passport.user.id]);
  if (admin_rows === undefined || admin_rows.length == 0) {
    return false;
  }
  return true;
};
