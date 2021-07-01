import * as express from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'wonyang',
  host: 'localhost',
  database: 'wonyang',
  password: 'qwer',
  port: 5432,
});

const router = express.Router();

const hello = (request, response) => {
  pool.query('SELECT * FROM films', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

router.get('/', hello);

export default router;
