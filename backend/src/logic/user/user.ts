import * as user_db from '../../db/user/user';

export const create = async (authId: string) => {
  await user_db.createUser(authId);
};

export const get = async (id: number) => {
  const user = await user_db.getUser(id);
  return user;
};

export const getByAuthId = async (authId: string) => {
  const user = await user_db.getUserByAuthId(authId);
  return user;
};

export const getOrCreate = async (authId: string) => {
  const user = await getByAuthId(authId);

  if (user.rows.length === 0) {
    const newUser = await create(authId);
    const resUser = await getByAuthId(authId);

    return resUser;
  }
  return user;
};
