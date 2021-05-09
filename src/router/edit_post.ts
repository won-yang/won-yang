import * as express from 'express';
const router = express.Router();
const sendQuery = require('../config/db');
const JSSoup = require('jssoup').default;
const permission = require('../function/permission_verify');
const write_func = require('../function/write_function');

router.get('/edit/:idx', async (req: any, res: any) => {
  if (!permission.isLogin(req.session.passport)) {
    res.send("<script>alert('로그인이 필요합니다.'); location.href='/login'; </script>");
    return;
  }

  const post_idx = req.params.idx;
  const user_id = req.session.passport.user.id;
  const my_post = await sendQuery(`SELECT post_idx FROM post WHERE post_idx = ? AND user_id = ?`, [post_idx, user_id]);

  if (!(await permission.isAdmin(req.session.passport))) {
    if (my_post.length == 0) {
      res.send("<script>alert('글 작성자가 아닙니다.'); location.href='/'; </script>");
      return;
    }
  }

  const rows = await sendQuery(`SELECT * FROM post NATURAL JOIN post_content NATURAL JOIN options WHERE post_idx=?`, [post_idx]);
  const tag_rows = await sendQuery(`SELECT main_gate, west_gate, east_gate, etc_gate FROM tag WHERE post_idx = ?`, [post_idx]);

  res.render('edit_post', { result: rows, tag: write_func.tag_name(tag_rows) });
});

router.post('/edit_ok', async (req: any, res) => {
  if (!permission.isLogin(req.session.passport)) {
    res.json({ result: 'error', message: '로그인이 필요합니다.', redirect: '/login' });
    return;
  }

  const post_idx = req.body.idx;
  const user_id = req.session.passport.user.id;

  const my_post = await sendQuery(`SELECT post_idx FROM post WHERE post_idx = ? AND user_id = ?`, [post_idx, user_id]);

  const admin_rows = await sendQuery(`SELECT user_id FROM admin WHERE user_id = ?`, [req.session.passport.user.id]);

  if (admin_rows.length == 0 && my_post.length == 0) {
    res.json({ result: 'error', message: '글 작성자가 아닙니다.', redirect: '/login' });
    return false;
  }

  let send_data = write_func.setData(req);

  if (write_func.checkLength(send_data, res) == false) return;
  let gate = write_func.setGate(req.body.tag);

  if (gate == false) res.json({ result: 'error', message: '태그를 선택하세요' });

  const soup = new JSSoup(send_data.content);
  const image_path = soup.find('img');

  const date_row = await sendQuery('SELECT post_date FROM post WHERE post_idx = ?', [post_idx]);
  if (admin_rows.length == 0)
    await sendQuery(`UPDATE post SET title = ?, post_date = SYSDATE() WHERE post_idx = ?`, [send_data.title, post_idx]);
  else await sendQuery(`UPDATE post SET title = ?, post_date = ? WHERE post_idx = ?`, [send_data.title, date_row[0].post_date, post_idx]);

  if (image_path != undefined) {
    await sendQuery(`UPDATE thumbnail SET image_path = ? WHERE post_idx = ?`, [image_path.attrs.src, post_idx]);
  }
  await sendQuery(`UPDATE tag SET main_gate = ?, west_gate = ?, east_gate = ?, etc_gate = ? WHERE post_idx = ?`, [
    gate.main_gate,
    gate.west_gate,
    gate.east_gate,
    gate.etc_gate,
    post_idx,
  ]);
  await sendQuery(
    `UPDATE options SET refrigerator = ?, desk = ?, wifi = ?, washing_machine = ?,
                    gas_stove = ?, microwave = ?, cctv = ?, closet = ?, bed = ?, tv = ?,
                    public_washing_machine = ?, public_kitchen = ?, elevator = ?, air_conditioner = ?, door_lock = ?  WHERE post_idx = ?`,
    [
      send_data.refrigerator,
      send_data.desk,
      send_data.wifi,
      send_data.washing_machine,
      send_data.gas_stove,
      send_data.microwave,
      send_data.cctv,
      send_data.closet,
      send_data.bed,
      send_data.tv,
      send_data.public_washing_machine,
      send_data.public_kitchen,
      send_data.elevator,
      send_data.air_conditioner,
      send_data.door_lock,
      post_idx,
    ],
  );
  await sendQuery(
    `UPDATE post_content SET contact = ?, contract_period = ?, address = ?, monthly_rent = ?, content = ?, deposit = ? WHERE post_idx = ?`,
    [
      send_data.contact,
      send_data.contract_period,
      send_data.address,
      send_data.monthly_rent,
      send_data.content,
      send_data.deposit,
      post_idx,
    ],
  );

  res.json({ result: 'success', message: '글 수정이 완료 되었습니다.', redirect: '/posts/' + post_idx });
});

module.exports = router;
