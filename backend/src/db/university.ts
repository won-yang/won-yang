import pool from './';
import { IUniversity } from '../interface';

export const getUniversityListByName = async (name: string): Promise<IUniversity[]> => {
  try {
    const res = await pool.query(`SELECT id, name, campus_name, address FROM UNIVERSITY WHERE name like '${name}%'`);
    return res.rows;
  } catch (err) {
    return err;
  }
};
