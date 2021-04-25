const express = require('express');
const router = express.Router();
const sendQuery = require('../../config/db');
const permission = require('../../function/permission_verify');

router.get('/admin/edit/:idx', async (req, res) => {
  if (!(await permission.isAdmin(req.session.passport))) {
    res.send("<script>alert('잘못된 접근 입니다.'); location.href='/login'; </script>");
    return;
  }

  const post_idx = req.params.idx;
  const rows = await sendQuery(`SELECT post_idx, title, content FROM notice WHERE post_idx=?`, [post_idx]);

  res.render('admin/edit_notice', { result: rows });
});

router.post('/admin/edit_ok', async (req, res) => {
  if (!(await permission.isAdmin(req.session.passport))) {
    res.send("<script>alert('잘못된 접근 입니다.'); location.href='/login'; </script>");
    return;
  }

  const post_idx = req.body.idx;

  let data = {
    title: req.body.title,
    content: req.body.content,
  };

  await sendQuery(`UPDATE notice SET title = ?, post_date = SYSDATE(), content = ? WHERE post_idx = ?`, [
    data.title,
    data.content,
    post_idx,
  ]);

  res.json({ result: 'success', message: '공지글 수정이 완료 되었습니다.', redirect: '/notices/' + post_idx });
});

module.exports = router;