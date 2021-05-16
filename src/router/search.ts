import * as express from 'express';
const router = express.Router();
import { sendQuery } from '../config/db';
const permission = require('../common/permission_verify');

const getTag = (post: any) => {
  console.log(post);
  if (post.main_gate == '1') return '#창원대 정문';
  else if (post.west_gate == '1') return '#기숙사 서문';
  else if (post.east_gate == '1') return '#공대 동문';
  else if (post.etc_gate == '1') return '#기타';
  else return '#기타';
};

router.get('/search', async (req: any, res: any) => {
  const main_gate = check(req.query.main_gate);
  const east_gate = check(req.query.east_gate);
  const west_gate = check(req.query.west_gate);
  const etc_gate = check(req.query.etc_gate);
  const monthly_rent = req.query.monthly_rent;

  if (
    main_gate == '1' &&
    east_gate == '1' &&
    west_gate == '1' &&
    etc_gate == '1' &&
    req.query.search.length == 0 &&
    !Number(monthly_rent)
  ) {
    res.redirect('/');
    return;
  }

  const notice_rows = await sendQuery(`SELECT title, post_idx FROM notice ORDER BY post_date DESC`);

  const page = await getPageInfo(req);
  const send_img = await getThumbNail(page.post_rows);
  const login_check = loginCheck(req);

  res.render('search', {
    post: page.post_rows,
    notice: notice_rows,
    image: send_img,
    login_check: login_check,
    page_info: page.page_info,
    getTag: getTag,
    main_gate: main_gate,
    east_gate: east_gate,
    west_gate: west_gate,
    etc_gate: etc_gate,
    monthly_rent: monthly_rent,
    search: req.query.search,
  });
});

router.get('/my_post', async (req: any, res: any) => {
  if (!req.session.passport) {
    res.json({ result: 'error', message: '로그인이 되어 있지 않습니다.' });
    return;
  }

  const user_id = req.session.passport.user.id;

  const page = await getPageInfoMyPost(req, user_id);
  const send_img = await getThumbNail(page.post_rows);
  const login_check = loginCheck(req);

  res.json({ 
    result: 'success', 
    post: page.post_rows, 
    image: send_img, 
    login_check: login_check, 
    page_info: page.page_info, 
    getTag: getTag,
  });
});

const check = (val: string) => {
  return val == 'true' ? '1' : '-1';
};

const getPageInfoMyPost = async (req: any, userId: any) => {
  const search = req.query.search != undefined ? `%${req.query.search}%` : '%%';
  const main_gate = check(req.query.main_gate);
  const east_gate = check(req.query.east_gate);
  const west_gate = check(req.query.west_gate);
  const etc_gate = check(req.query.etc_gate);
  const monthly_rent = Number(req.query.monthly_rent) ? Number(req.query.monthly_rent) : 9999999999;

  const pageNum = Number(req.query.pageNum) || 1;
  const contentSize = 12;
  const pnSize = 10; //페이지 사이즈
  const skipSize = (pageNum - 1) * contentSize;

  const totalCount = await sendQuery(
    `SELECT count(*) as count
      FROM post NATURAl JOIN post_content
      WHERE user_id = ?
      ORDER BY post_date DESC;`,
    [userId],
  );
  const pnTotal = Math.ceil(totalCount[0].count / contentSize); // NOTE: 페이지네이션의 전체 카운트
  const pnStart = (Math.ceil(pageNum / pnSize) - 1) * pnSize + 1; // NOTE: 현재 페이지의 페이지네이션 시작 번호.
  let pnEnd = pnStart + pnSize - 1;

  const post_rows = await sendQuery(
    `SELECT post_idx, title, DATE_FORMAT(post_date, '%Y년 %m월 %d일 %H:%i') as post_date, address, deposit, monthly_rent, main_gate, west_gate, east_gate, etc_gate 
      FROM post NATURAl JOIN post_content NATURAl JOIN tag
      WHERE user_id = ?
      ORDER BY post_date DESC LIMIT ${skipSize}, ${contentSize};`,
    [userId],
  );
  if (pnEnd > pnTotal) pnEnd = pnTotal;

  const page_info = {
    pageNum,
    pnStart,
    pnEnd,
    pnTotal,
  };

  return { page_info: page_info, post_rows: post_rows };
};

const getPageInfo = async (req: any) => {
  const search = req.query.search != undefined ? `%${req.query.search}%` : '%%';
  const main_gate = check(req.query.main_gate);
  const east_gate = check(req.query.east_gate);
  const west_gate = check(req.query.west_gate);
  const etc_gate = check(req.query.etc_gate);
  const monthly_rent = Number(req.query.monthly_rent) ? Number(req.query.monthly_rent) : 9999999999;

  const pageNum = Number(req.query.pageNum) || 1;
  const contentSize = 12;
  const pnSize = 10; //페이지 사이즈
  const skipSize = (pageNum - 1) * contentSize;

  const totalCount = await sendQuery(
    `SELECT count(*) as count
      FROM post NATURAl JOIN post_content
      WHERE post_idx IN
      	(SELECT post_idx FROM post NATURAL JOIN tag WHERE main_gate = ? OR west_gate = ? OR east_gate = ? OR etc_gate = ?)
      	AND
      	title LIKE ?
          AND
          monthly_rent <= ?
      ORDER BY post_date DESC;`,
    [main_gate, west_gate, east_gate, etc_gate, search, monthly_rent],
  );
  const pnTotal = Math.ceil(totalCount[0].count / contentSize); // NOTE: 페이지네이션의 전체 카운트
  const pnStart = (Math.ceil(pageNum / pnSize) - 1) * pnSize + 1; // NOTE: 현재 페이지의 페이지네이션 시작 번호.
  let pnEnd = pnStart + pnSize - 1;

  const post_rows = await sendQuery(
    `SELECT post_idx, title, DATE_FORMAT(post_date, '%Y년 %m월 %d일 %H:%i') as post_date, address, deposit, monthly_rent, main_gate, west_gate, east_gate, etc_gate
      FROM post NATURAl JOIN post_content NATURAl JOIN tag
      WHERE post_idx IN
      	(SELECT post_idx FROM post NATURAL JOIN tag WHERE main_gate = ? OR west_gate = ? OR east_gate = ? OR etc_gate = ?)
      	AND
      	title LIKE ? 
          AND
          monthly_rent <= ?
      ORDER BY post_date DESC LIMIT ${skipSize}, ${contentSize};`,
    [main_gate, west_gate, east_gate, etc_gate, search, monthly_rent],
  );
  if (pnEnd > pnTotal) pnEnd = pnTotal;

  const page_info = {
    pageNum,
    pnStart,
    pnEnd,
    pnTotal,
  };

  return { page_info: page_info, post_rows: post_rows };
};

const getThumbNail = async (post_rows: any) => {
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
};

const loginCheck = (req: any) => {
  if (permission.isLogin(req.session.passport)) return true;
  return false;
};

module.exports = router;
