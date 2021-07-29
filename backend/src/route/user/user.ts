import express from 'express';
import * as user_logic from '../../logic/user/user';
import { IUserRequest } from '../../interface';
const router = express.Router();

router.get('/', async (req: IUserRequest, res) => {
  // await user_logic.create('123');
  // const user = await user_logic.get(1);

  res.status(200).json({ asd: '123' });
});

export default router;
