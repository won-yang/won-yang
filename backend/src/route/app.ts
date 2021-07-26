import express from 'express';
import loginRouter from './login';
import userRouter from './user';
import cookieParser from 'cookie-parser';
import passport from 'passport';

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);

app.get('*', (req: any, res: any) => {
  res.send('not found');
});

app.listen(8080, () => {
  console.log('Running...');
});
