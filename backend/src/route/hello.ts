import * as express from 'express';
// import pool from '../db';
import * as util from '../util';

const router = express.Router();

const hello = (req, res) => {
  // pool.query('select * from films', (error, results) => {
  //   if (error) {
  //     throw error;
  //   }
  //   console.log(results.rows);
  //   response.status(200).json(results.rows);
  // });
  // const token = req.cookies.token;
  // const data = util.verifyToken(token);

  res.status(200).json({ hello: 'hi' });
};

router.get('/', hello);

export default router;
