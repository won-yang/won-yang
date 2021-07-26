import express from 'express';
import * as user_logic from '../logic/user';
const router = express.Router();

router.get('/', async (req, res) => {
  await user_logic.create('123135', 'mimseong', 3);
  const user = await user_logic.get(1);
  res.status(200).json(user);
});

export default router;
