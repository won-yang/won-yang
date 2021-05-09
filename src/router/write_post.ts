import * as express from 'express';
const router = express.Router();
const sendQuery = require('../config/db');
const JSSoup = require('jssoup').default;
const permission = require('../function/permission_verify');
const write_func = require('../function/write_function');

router.get('/write', async (req: any, res) => {
  if (!permission.isLogin(req.session.passport)) {
    res.send("<script>alert('로그인이 필요합니다.'); location.href='/login'; </script>");
    return;
  }

  let admin_check = false;
  if (await permission.isAdmin(req.session.passport)) {
    admin_check = true;
  }
  res.render('write_post', { admin_check: admin_check });
});

router.post('/write_ok', async (req: any, res) => {
  if (!permission.isLogin(req.session.passport)) {
    res.json({ result: 'error', message: '로그인이 필요합니다.', redirect: '/' });
    return;
  }

  let send_data = write_func.setData(req);

  if (write_func.checkLength(send_data, res) == false) return;
  let gate = write_func.setGate(req.body.tag);

  if (gate == false) res.json({ result: 'error', message: '태그를 선택하세요' });

  const user_id = req.session.passport.user.id;
  await sendQuery(`INSERT INTO post (user_id, title, post_date) VALUES(?, ?, SYSDATE())`, [user_id, send_data.title]);
  const index = await write_func.getindex(user_id);

  let soup = new JSSoup(send_data.content);
  let image_path = soup.find('img');
  if (image_path != undefined) {
    await sendQuery(`INSERT INTO thumbnail (post_idx, image_path)  VALUES(?, ?)`, [index, image_path.attrs.src]);
  }
  await sendQuery(`INSERT INTO tag VALUES(?, ?, ?, ?, ?)`, [index, gate.main_gate, gate.west_gate, gate.east_gate, gate.etc_gate]);
  await sendQuery(`INSERT INTO options VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
    index,
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
  ]);
  await sendQuery(`INSERT INTO post_content VALUES(?, ?, ?, ?, ?, ?, ?)`, [
    index,
    send_data.contact,
    send_data.contract_period,
    send_data.address,
    send_data.deposit,
    send_data.monthly_rent,
    send_data.content,
  ]);

  res.json({ result: 'success', message: '글이 작성되었습니다.', redirect: '/posts/' + index });
});

module.exports = router;
