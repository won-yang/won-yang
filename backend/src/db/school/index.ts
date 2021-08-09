import pool from '..';

export const getSchoolByName = async (name: string) => {
  try {
    const res = await pool.query(`SELECT id, name, campus_name, address FROM SCHOOL WHERE name like '${name}%'`);
    return res;
  } catch (err) {
    return err;
  }
};
