import * as express from 'express';
const router = express.Router();
const sendQuery = require('../config/db');

const getTag = (post: any) => {
  if (post.main_gate == '1') return '#기숙사 서문';
  else if (post.west_gate == '1') return '#기숙사 서문';
  else if (post.east_gate == '1') return '#공대 동문';
  else if (post.etc_gate == '1') return '#기타';
  else return '#기타';
};

router.get('/posts/:idx', async (req, res) => {
  const rows = await sendQuery(`SELECT * FROM post NATURAL JOIN post_content NATURAL JOIN options WHERE post_idx=?`, [req.params.idx]);

  if (rows.length == 0) {
    res.send('<script type="text/javascript">alert("찾으시는 글이 존재하지 않습니다."); history.back();</script>');
    return;
  }
  const image_rows = await sendQuery('SELECT image_path FROM thumbnail WHERE post_idx = ?', [req.params.idx]);
  const post_date_rows = await sendQuery(
    `SELECT DATE_FORMAT(post_date, '%Y년 %m월 %d일 %H:%i') as post_date FROM post WHERE post_idx = ?`,
    [req.params.idx],
  );
  const tag_rows = await sendQuery('SELECT main_gate, west_gate, east_gate, etc_gate FROM tag WHERE post_idx = ?', [req.params.idx]);
  const auth_check = await authCheck(req);

  console.log(post_date_rows);

  res.render('post', { result: rows, tag: tag_rows, time: post_date_rows, image: image_rows, auth_check: auth_check, getTag: getTag });
});

const authCheck = async (req: any) => {
  const auth_check: any = {};

  auth_check.login = false;
  auth_check.post_owner = false;
  auth_check.admin = false;
  if (req.session.passport == undefined) return auth_check;

  auth_check.login = true;

  const post_idx = req.params.idx;
  const user_id = req.session.passport.user.id;
  const my_post = await sendQuery(`SELECT post_idx FROM post WHERE post_idx = ? AND user_id = ?`, [post_idx, user_id]);
  const admin_rows = await sendQuery(`SELECT user_id FROM admin WHERE user_id = ?`, [req.session.passport.user.id]);

  if (my_post.length != 0) auth_check.post_owner = true;

  if (admin_rows.length == 1) auth_check.admin = true;
  return auth_check;
};

module.exports = router;
