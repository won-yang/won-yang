import * as express from 'express';
import { sendQuery } from '../../config/db';
const permission = require('../../function/permission_verify');

const router = express.Router();
router.delete('/notices/:idx', async (req: any, res: any) => {
  if (!(await permission.isAdmin(req.session.passport))) {
    res.json({ result: 'error', message: '잘못된 접근 입니다.' });
    return;
  }

  const post_idx = req.params.idx;

  await sendQuery(`DELETE FROM notice WHERE post_idx = ?`, [post_idx]);

  res.json({ result: 'success', message: '공지글이 삭제 되었습니다.', redirect: '/' });
});

module.exports = router;