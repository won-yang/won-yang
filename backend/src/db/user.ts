import pool from '.';

export const createUser = async (authId: string) => {
  try {
    await pool.query(
      `INSERT INTO USERS (auth_id, last_login) 
			VALUES ($1, current_timestamp)`,
      [authId],
    );
  } catch (err) {
    return err;
  }
};

export const getUser = async (id: number) => {
  try {
    const res = await pool.query(`SELECT * FROM USERS WHERE id = $1`, [id]);
    return res;
  } catch (err) {
    return err;
  }
};

export const getUserByAuthId = async (authId: string) => {
  try {
    const res = await pool.query(`SELECT * FROM USERS WHERE auth_id = $1`, [authId]);
    return res;
  } catch (err) {
    return err;
  }
};
