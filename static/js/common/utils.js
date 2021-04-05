function onlyNumber() {
  if (event.keyCode < 48 || event.keyCode > 57) {
    event.returnValue = false;
  }
}

const getTag = (post) => {
  if (post.main_gate == '1') return '#창원대 정문';
  else if (post.west_gate == '1') return '#기숙사 서문';
  else if (post.east_gate == '1') return '#공대 동문';
  else if (post.etc_gate == '1') return '#기타';
  else return '#기타';
};
