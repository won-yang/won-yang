import * as express from 'express';
import { Client, Query } from 'pg';

const client = new Client({ user: 'postgres', host: 'localhost', database: 'postgres', password: 'mysecretpassword', port: 5432 });

const app = express();

import router from './hello';

app.use(express.json());

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('success!');
  }
});

app.use('/api', router);

app.get('*', (req: any, res: any) => {
  // res.render('error/404');
  res.send('not found');
});

app.listen(8080, () => {
  console.log('Running...');
});
