import * as express from 'express';
const router = express.Router();
import { sendQuery } from '../config/db';
const permission = require('../common/permission_verify');

router.post('/admin/notice_ok', async (req: any, res) => {
  if (!(await permission.isAdmin(req.session.passport))) {
    res.json({ result: 'error', message: '관리자가 아닙니다.', redirect: '/' });
    return;
  }

  const title = req.body.title;
  const content = req.body.content;

  if (title.length == 0) {
    res.json({ 'result:': 'error', message: '제목을 입력해 주세요.' });
    return;
  }

  const user_id = req.session.passport.user.id;
  await sendQuery(`INSERT INTO notice (user_id, title, post_date, content) VALUES(?, ?, SYSDATE(), ?)`, [user_id, title, content]);

  res.json({ result: 'success', message: '글이 작성되었습니다.', redirect: '/' });
});

module.exports = router;
