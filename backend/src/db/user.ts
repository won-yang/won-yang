import pool from '.';

export const createUser = async (authId: string, nickname: string, schoolId: number) => {
  try {
    await pool.query(
      `INSERT INTO USERS (auth_id, nickname, school_id, last_login) 
			VALUES ($1, $2, $3, current_timestamp)`,
      [authId, nickname, schoolId],
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
