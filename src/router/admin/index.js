const express = require('express');
const router = express.Router();
const sendQuery = require('../../config/db');

router.get('/admin', async (req, res) => {
  const notice_rows = await sendQuery(`SELECT title, post_idx FROM notice ORDER BY post_date DESC`);
  const post_rows = await sendQuery(
    `SELECT post_idx, title, post_date, address, deposit, monthly_rent FROM post NATURAl JOIN post_content ORDER BY post_date DESC`,
  );

  res.render('admin/index', { notice: notice_rows, post: post_rows });
});

module.exports = router;
