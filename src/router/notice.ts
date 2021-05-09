import * as express from 'express';
const router = express.Router();
const sendQuery = require('../config/db');
const permission = require('../function/permission_verify');

router.get('/notices/:idx', async (req: any, res: any) => {
  const notice_rows = await sendQuery(`SELECT title, content, post_idx FROM notice WHERE post_idx = ?`, [req.params.idx]);

  if (notice_rows.length == 0) {
    res.send('<script type="text/javascript">alert("찾으시는 글이 존재하지 않습니다."); history.back();</script>');
    return;
  }

  let admin_check = await permission.isAdmin(req.session.passport);

  res.render('notice', { notice: notice_rows, admin_check: admin_check });
});

module.exports = router;
