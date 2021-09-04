import express from 'express';
import loginRouter from './login';
import userRouter from './user';

const router = express.Router();

router.use('/', userRouter);

router.get('/logout', (req: any, res: any) => {
  res.clearCookie('token');
  res.redirect('/api/main');
});

router.use('/login', loginRouter);

export default router;
