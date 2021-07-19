import * as user_db from '../db/user';

export const create = async (authId: string, nickname: string, schoolId: number) => {
  const res = await user_db.createUser(authId, nickname, schoolId);

  console.log('user-------create--------------');
  console.log(res);
  console.log('user--------create-------------');
};

export const get = async (id: number) => {
  const user = await user_db.getUser(id);
  console.log('user-----get----------------');
  console.log(user);
  console.log('user-------get--------------');
  return user;
};
