import * as express from 'express';

import { Pool } from 'pg';

const pool = new Pool({
  user: 'wonyang',
  host: 'localhost',
  database: 'wonyang',
  password: 'qwer',
  port: 5432,
});

const app = express();

import router from './hello';

app.use(express.json());

app.use('/api', router);

app.get('*', (req: any, res: any) => {
  // res.render('error/404');
  res.send('not found');
});

app.listen(8080, () => {
  console.log('Running...');
});
