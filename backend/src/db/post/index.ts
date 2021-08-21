import pool from '..';
import { IPost } from './../../interface';
import { TPOST_STATUS } from './../../types';

export const getPost = async (type: TPOST_STATUS | null = null, page: number): Promise<IPost[]> => {
  console.log(type, page);

  try {
    const res =
      type === null
        ? await pool.query(
            `SELECT p.id, p.title, p.deposit, p.monthly_rent, p.address, p.post_status, i.image_url FROM post as p LEFT JOIN image as i ON p.id = i.post_id`,
          )
        : await pool.query(`SELECT p.id, p.title, p.deposit, p.monthly_rent, p.address, p.post_status, i.image_url FROM post as p LEFT JOIN image as i ON p.id = i.post_id WHERE p.post_status =
      '${type}'`);
    return res.rows;
  } catch (err) {
    return err;
  }
};
