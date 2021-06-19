$('.search_address').click(function () {
  const confmKey = 'U01TX0FVVEgyMDIxMDExNzIwNDA0MjExMDcwMDM=';
  const returnUrl = 'https://won-yang.com/';
  goPopup(confmKey, returnUrl);
});
const goPopup = function (confmKey, returnUrl) {
  const url = `?confmKey=${confmKey}&returnUrl=${returnUrl}`;
  const pop = window.open(
    `https://www.juso.go.kr/addrlink/addrCoordUrl.do${url}`,
    'pop',
    'width=570,height=420, scrollbars=yes, resizable=yes',
  );
};
