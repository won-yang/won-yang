import * as express from 'express';
import router from './hello';

const app = express();

app.use(express.json());

app.use('/api', router);

app.get('*', (req: any, res: any) => {
  // res.render('error/404');
  res.send('not found');
});

app.listen(8080, () => {
  console.log('Running...');
});
