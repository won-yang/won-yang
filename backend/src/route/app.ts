import express from 'express';
import helloRouter from './hello';
import loginRouter from './login';
import cookieParser from 'cookie-parser';
import passport from 'passport';

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

app.use('/api/login', loginRouter);
app.use('/api/hello', helloRouter);

app.get('*', (req: any, res: any) => {
  // res.render('error/404');
  res.send('not found');
});

app.listen(8080, () => {
  console.log('Running...');
});
