import * as express from 'express';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'wonyang',
  host: 'localhost',
  database: 'wonyang',
  password: 'mysecretpassword',
  port: 5432,
  max: 20,
});

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
