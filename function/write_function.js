const sendQuery = require('../config/db');

exports.getindex = async function (user_id) {
  const rows = await sendQuery(
    `SELECT post_idx FROM post WHERE user_id = ? AND post_date = (
                                  SELECT MAX(post_date)
                                  FROM post
                                  WHERE user_id = ?
                                )`,
    [user_id, user_id],
  );

  return rows[0].post_idx;
};

exports.setData = function (req) {
  let send_data = {};

  send_data.title = req.body.title;
  send_data.contact = req.body.contact;
  send_data.deposit = req.body.deposit;
  send_data.monthly_rent = req.body.monthly_rent;
  send_data.contract_period = req.body.contract_period;
  send_data.address = req.body.address;
  send_data.content = req.body.content;

  send_data.refrigerator = check(req.body.refrigerator);
  send_data.desk = check(req.body.desk);
  send_data.wifi = check(req.body.wifi);
  send_data.washing_machine = check(req.body.washing_machine);
  send_data.gas_stove = check(req.body.gas_stove);
  send_data.door_lock = check(req.body.door_lock);
  send_data.microwave = check(req.body.microwave);
  send_data.cctv = check(req.body.cctv);
  send_data.closet = check(req.body.closet);
  send_data.bed = check(req.body.bed);
  send_data.tv = check(req.body.tv);
  send_data.public_washing_machine = check(req.body.public_washing_machine);
  send_data.public_kitchen = check(req.body.public_kitchen);
  send_data.elevator = check(req.body.elevator);
  send_data.air_conditioner = check(req.body.air_conditioner);

  return send_data;
};

exports.setGate = function (tag) {
  let gate = {};

  gate.main_gate = '0';
  gate.west_gate = '0';
  gate.east_gate = '0';
  gate.etc_gate = '0';

  if (tag === '창원대 정문') gate.main_gate = '1';
  else if (tag === '기숙사 서문') gate.west_gate = '1';
  else if (tag === '공대 동문') gate.east_gate = '1';
  else if (tag === '기타') gate.etc_gate = '1';
  else return false;
  return gate;
};

exports.checkLength = function (send_data, res) {
  if (send_data.title.length == 0) {
    res.json({ 'result:': 'error', message: '제목을 입력해 주세요.' });
    return false;
  }
  if (send_data.contact.length == 0) {
    res.json({ result: 'error', message: '연락처를 입력해 주세요.' });
    return false;
  }
  if (send_data.deposit.length == 0) {
    res.json({ result: 'error', message: '보증금을 입력해 주세요.' });
    return false;
  }
  if (send_data.monthly_rent.length == 0) {
    res.json({ result: 'error', message: '월세를 입력해 주세요.' });
    return false;
  }
  if (send_data.contract_period.length == 0) {
    res.json({ result: 'error', message: '계약기간을 입력해 주세요.' });
    return false;
  }
  if (send_data.address.length == 0) {
    res.json({ result: 'error', message: '위치를 입력해 주세요.' });
    return false;
  }
  return true;
};

exports.tag_name = function (tag_rows) {
  if (tag_rows[0].main_gate == '1') return '창원대 정문';
  if (tag_rows[0].west_gate == '1') return '기숙사 서문';
  if (tag_rows[0].east_gate == '1') return '공대 동문';
  if (tag_rows[0].etc_gate == '1') return '기타';
};

function check(parm) {
  return parm == 'true' ? '1' : '0';
}
