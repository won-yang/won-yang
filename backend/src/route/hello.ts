import * as express from 'express';
import pool from '../db';

const router = express.Router();

const hello = (request, response) => {
  pool.query('select * from films', (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
    response.status(200).json(results.rows);
  });
};

router.get('/', hello);

export default router;
