import pool from '..';
import { IUniversity } from '../../interface/interface';

export const getSchoolByName = async (name: string): Promise<IUniversity[]> => {
  try {
    const res = await pool.query(`SELECT id, name, campus_name, address FROM SCHOOL WHERE name like '${name}%'`);
    return res.rows;
  } catch (err) {
    return err;
  }
};
