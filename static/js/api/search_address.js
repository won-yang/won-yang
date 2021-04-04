$(".search_address").click(function(){
    
    
    
    
    const confmKey = "U01TX0FVVEgyMDIxMDExNzIwNDA0MjExMDcwMDM=";
    const returnUrl = "https://won-yang.com/";
    goPopup(confmKey, returnUrl);
});


function goPopup(confmKey, returnUrl) {
    let url = `?confmKey=${confmKey}&returnUrl=${returnUrl}`;
        var pop = window.open(
          'https://www.juso.go.kr/addrlink/addrCoordUrl.do'+url,
          'pop',
          'width=570,height=420, scrollbars=yes, resizable=yes'
        );
      }