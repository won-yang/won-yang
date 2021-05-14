$('.search_address').click(function () {
    var confmKey = 'U01TX0FVVEgyMDIxMDExNzIwNDA0MjExMDcwMDM=';
    var returnUrl = 'https://won-yang.com/';
    goPopup(confmKey, returnUrl);
});
var goPopup = function (confmKey, returnUrl) {
    var url = "?confmKey=" + confmKey + "&returnUrl=" + returnUrl;
    var pop = window.open('https://www.juso.go.kr/addrlink/addrCoordUrl.do' + url, 'pop', 'width=570,height=420, scrollbars=yes, resizable=yes');
};
