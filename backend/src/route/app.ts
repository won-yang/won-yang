import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import loginRouter from './user/login';
import userRouter from './user/user';
import mainRouter from './main';

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/main', mainRouter);

app.get('*', (req: any, res: any) => {
  res.send('not found');
});

app.listen(8080, () => {
  console.log('Running...');
});
