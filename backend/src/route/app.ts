import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import morgan from 'morgan';
import loginRouter from './user/login';
import userRouter from './user/user';
import mainRouter from './main';
import schoolRouter from './school';

const app = express();

app.use(morgan('common'));
app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/main', mainRouter);
app.use('/api/school', schoolRouter);

app.get('*', (req: any, res: any) => {
  res.send('not found');
});

app.listen(8080, () => {
  console.log('Running...');
});
