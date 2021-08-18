import pool from '..';
import { IPost } from './../../interface';
import { TPOST_STATUS } from './../../types';

export const getPost = async (type: TPOST_STATUS | null = null, page: number): Promise<IPost[]> => {
  console.log(type, page);

  try {
    const res =
      type === null ? await pool.query(`SELECT * FROM POST`) : await pool.query(`SELECT * FROM POST WHERE post_status = '${type}'`);
    return res.rows;
  } catch (err) {
    return err;
  }
};
