import express from 'express';
const router = express.Router();
import * as board_logic from '../../logic/main/board';

router.get('/', async (req: any, res: any) => {
  const { type, page } = req.query;

  if (!page) {
    res.status(400).send('');
    return;
  }

  console.log(type, page);

  const result = await board_logic.getPostList(type, page);

  res.status(200).json({ total_post: result.total_post, post: result.post });
});

export default router;
