import express from 'express';
import * as user_logic from '../../logic/user/user';
import loginRouter from './login';
const router = express.Router();

router.get('/', async (req: any, res) => {
  console.log('/');
  res.status(200).json({ asd: '123' });
});

router.get('/logout', (req: any, res: any) => {
  res.clearCookie('token');
  res.redirect('/api/main');
});

router.use('/login', loginRouter);

export default router;
