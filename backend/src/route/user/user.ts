import express from 'express';
import { IUserRequest } from '../../interface/interface';
const router = express.Router();

router.get('/', async (req: IUserRequest, res) => {
  res.status(200).json({ asd: '123' });
});

export default router;
