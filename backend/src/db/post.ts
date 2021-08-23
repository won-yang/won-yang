import pool from '.';
import { IPostBoardList } from '../interface/interface';
import { TPOST_STATUS } from '../interface/types';

const PAGE_SIZE = 10;

export const getPost = async (type: TPOST_STATUS | null = null, page: number): Promise<IPostBoardList[]> => {
  const startPage = PAGE_SIZE * (page - 1) + 1;
  const endPage = PAGE_SIZE * page;

  try {
    const res =
      type === null
        ? await pool.query(
            `SELECT p.id, p.title, p.deposit, p.monthly_rent, p.address, p.post_status, to_char(p.created_at, 'YYYY-MM-DD HH24:MI:SS') as created_at, i.image_url FROM post as p LEFT JOIN image as i ON p.id = i.post_id WHERE ${startPage} <= p.id AND p.id <= ${endPage} ORDER BY p.id DESC`,
          )
        : await pool.query(`SELECT p.id, p.title, p.deposit, p.monthly_rent, p.address, p.post_status, to_char(p.created_at, 'YYYY-MM-DD HH24:MI:SS') as created_at, i.image_url FROM post as p LEFT JOIN image as i ON p.id = i.post_id WHERE p.post_status =
      '${type}' AND ${startPage} <= p.id AND p.id <= ${endPage} ORDER BY p.id DESC`);
    return res.rows;
  } catch (err) {
    return err;
  }
};
