$('.btn-submit').click(function () {
  const notice_check = $('input[name=notice_check]').is(':checked');
  if (notice_check) {
    const notice_values = getNoticeValue();
    if (!checkNoticeLength(notice_values)) {
      return;
    }
    console.log('체크 완료');
    sendData(notice_values, '/admin/notice_ok');
    return;
  }
  const post_values = getPostValue();
  if (!checkPostLength(post_values)) {
    return;
  }
  sendData(post_values, '/write_ok');
});
const sendData = function (post_values, url) {
  $.ajax({
    type: 'POST',
    url,
    data: post_values,
    dataType: 'json',
    success(data) {
      const result = data;
      if (result.result == 'error') {
        alert(result.message);
        location.href = result.redirect;
      } else {
        alert(result.message);
        location.href = result.redirect;
      }
    },
  });
};
const checkNoticeLength = function (notice_values) {
  if (notice_values.title.length == 0) {
    alert('제목을 적어주세요');
    return false;
  }
  if (notice_values.content.length == 0) {
    alert('내용을 적어주세요');
    return false;
  }
  return true;
};
const checkPostLength = function (post_values) {
  if (post_values.tag === '태그') {
    alert('태그를 선택해주세요');
    return false;
  }
  if (post_values.title.length == 0) {
    alert('제목을 적어주세요');
    return false;
  }
  if (post_values.contact.length == 0) {
    alert('연락처를 적어주세요');
    return false;
  }
  if (post_values.deposit.length == 0) {
    alert('보증금을 적어주세요');
    return false;
  }
  if (post_values.monthly_rent.length == 0) {
    alert('월세를 적어주세요');
    return false;
  }
  if (post_values.contract_period.length == 0) {
    alert('계약기간을 적어주세요');
    return false;
  }
  if (post_values.address.length == 0) {
    alert('위치를 적어주세요');
    return false;
  }
  return true;
};
// 공지 게시글 데이터 가져오기
const getNoticeValue = function () {
  return {
    title: $('input[name=title]').val(),
    content: getDataFromTheEditor(),
  };
};
// 일반 게시글 데이터 가져오기
const getPostValue = function () {
  return {
    title: $('input[name=title]').val(),
    contact: $('input[name=contact]').val(),
    deposit: $('input[name=deposit]').val(),
    monthly_rent: $('input[name=monthly_rent]').val(),
    contract_period: $('input[name=contract_period]').val(),
    address: $('input[name=address]').val(),
    content: getDataFromTheEditor(),
    tag: $('.dropdown-toggle').text(),
    air_conditioner: $('input[name=air_conditioner]').is(':checked'),
    refrigerator: $('input[name=refrigerator]').is(':checked'),
    desk: $('input[name=desk]').is(':checked'),
    wifi: $('input[name=wifi]').is(':checked'),
    washing_machine: $('input[name=washing_machine]').is(':checked'),
    gas_stove: $('input[name=gas_stove]').is(':checked'),
    door_lock: $('input[name=door_lock]').is(':checked'),
    microwave: $('input[name=microwave]').is(':checked'),
    cctv: $('input[name=cctv]').is(':checked'),
    closet: $('input[name=closet]').is(':checked'),
    bed: $('input[name=bed]').is(':checked'),
    tv: $('input[name=tv]').is(':checked'),
    public_washing_machine: $('input[name=public_washing_machine]').is(':checked'),
    public_kitchen: $('input[name=public_kitchen]').is(':checked'),
    elevator: $('input[name=elevator]').is(':checked'),
  };
};
/* 내용 입력 시, 글자 수 검증 */
// $('#editor').on({
//   keydown(event) {
//     if ($('#editor').text().length <= 2000) {
//       const current_length = $('#editor').text().length;
//       $('.text-length').text(`${current_length}자`);
//     } else {
//       event.preventDefault();
//     }
//   },
// });

$('#editor').on('keyup', function() {
  console.log('글자수 확인중');
  if($(this).val().length > 4000) {
    alert('2000자 이내로 작성해 주세요.');
    $(this).val($(this).val().substring(0, 4000));
  }
});
