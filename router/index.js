const express = require('express');
const router = express.Router();
const sendQuery = require('../config/db');
const permission = require('../function/permission_verify');

const getTag = (post) => {
  if (post.main_gate == '1') return '#기숙사 서문';
  else if (post.west_gate == '1') return '#기숙사 서문';
  else if (post.east_gate == '1') return '#공대 동문';
  else if (post.etc_gate == '1') return '#기타';
  else return '#기타';
};

router.get('/', async (req, res) => {
  const notice_rows = await sendQuery(`SELECT title, post_idx FROM notice ORDER BY post_date DESC`);

  const page = await getPageInfo(req);
  const send_img = await getThumbNail(page.post_rows);
  const login_check = loginCheck(req);
  res.render('index', { post: page.post_rows, notice: notice_rows, image: send_img, login_check: login_check, page_info: page.page_info, getTag: getTag });
});



async function getPageInfo(req) {
  const pageNum = Number(req.query.pageNum) || 1;
  const contentSize = 12;
  const pnSize = 10; //페이지 사이즈
  const skipSize = (pageNum - 1) * contentSize;

  const totalCount = await sendQuery('SELECT count(*) as `count` FROM post');
  const pnTotal = Math.ceil(totalCount[0].count / contentSize); // NOTE: 페이지네이션의 전체 카운트
  const pnStart = (Math.ceil(pageNum / pnSize) - 1) * pnSize + 1; // NOTE: 현재 페이지의 페이지네이션 시작 번호.
  let pnEnd = pnStart + pnSize - 1;

  const post_rows = await sendQuery(
    `SELECT post_idx, title, DATE_FORMAT(post_date, '%Y년 %m월 %d일 %H:%i') as post_date, address, deposit, monthly_rent, main_gate, west_gate, east_gate, etc_gate FROM post NATURAl JOIN post_content NATURAl JOIN tag ORDER BY post_date DESC LIMIT ${skipSize}, ${contentSize}`,
  );
  if (pnEnd > pnTotal) pnEnd = pnTotal;

  const page_info = {
    pageNum,
    pnStart,
    pnEnd,
    pnTotal,
  };

  return { page_info: page_info, post_rows: post_rows };
}

async function getThumbNail(post_rows) {
  const images = new Array();
  for (const row of post_rows) {
    const image = await sendQuery('SELECT image_path FROM thumbnail WHERE post_idx = ?', [row.post_idx]);
    images.push(image);
  }

  const send_img = images.map((image) => {
    if (image[0]) return image[0].image_path;
    else return '/image/image_thumbnail.png';
  });

  return send_img;
}

function loginCheck(req) {
  if (permission.isLogin(req.session.passport)) return true;
  return false;
}

module.exports = router;
