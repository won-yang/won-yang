import * as express from 'express';
const router = express.Router();
const sendQuery = require('../config/db');
const permission = require('../function/permission_verify');

router.delete('/posts/:idx', async (req: any, res: any) => {
  if (!permission.isLogin(req.session.passport)) {
    res.json({ result: 'error', message: '로그인이 필요합니다.', redirect: '/login' });
    return;
  }

  const post_idx = req.params.idx;
  const user_id = req.session.passport.user.id;
  const rows = await sendQuery(`SELECT post_idx FROM post WHERE post_idx = ? AND user_id = ?`, [post_idx, user_id]);

  if (!(await permission.isAdmin(req.session.passport))) {
    if (rows.length == 0) {
      res.json({ result: 'error', message: '글 작성자가 아닙니다.' });
      return;
    }
  }

  await sendQuery(`DELETE FROM thumbnail WHERE post_idx = ?`, [post_idx]);
  await sendQuery(`DELETE FROM tag WHERE post_idx = ?`, [post_idx]);
  await sendQuery(`DELETE FROM options WHERE post_idx = ?`, [post_idx]);
  await sendQuery(`DELETE FROM post_content WHERE post_idx = ?`, [post_idx]);
  await sendQuery(`DELETE FROM post WHERE post_idx = ?`, [post_idx]);

  res.json({ result: 'success', message: '게시글이 삭제 되었습니다.', redirect: '/' });
});

module.exports = router;
