import * as user_db from '../db/user';

export const create = async (authId: string, nickname: string, schoolId: number) => {
  await user_db.createUser(authId, nickname, schoolId);
};

export const get = async (id: number) => {
  const user = await user_db.getUser(id);
  return user;
};
