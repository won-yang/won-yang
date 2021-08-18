import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';

import userRouter from './user';
import mainRouter from './main';
import universityRouter from './university';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(morgan('common'));
app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/main', mainRouter);
app.use('/api/university', universityRouter);

app.get('*', (req: any, res: any) => {
  res.send('not found');
});

app.listen(8080, () => {
  console.log('Running...');
});
