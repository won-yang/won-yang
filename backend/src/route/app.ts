import * as express from 'express';
const app = express();

import router from './hello';

app.use('/api', router);


app.get('*', (req: any, res: any) => {
  res.render('error/404');
});

app.listen(8080, () => {
  console.log('Running...');
});
