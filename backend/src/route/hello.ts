import * as express from 'express';
const router = express.Router();

const hello = (req: any, res: any) => {
  return res.json({ text: 'hello world' });
};

router.get('/', hello);

export default router;
