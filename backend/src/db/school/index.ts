import pool from '..';
import { ISchool } from '../../interface/interface';

export const getSchoolByName = async (name: string): Promise<ISchool[]> => {
  try {
    const res = await pool.query(`SELECT id, name, campus_name, address FROM SCHOOL WHERE name like '${name}%'`);
    return res.rows;
  } catch (err) {
    return err;
  }
};
