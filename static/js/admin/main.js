/********* 전체 선택 / 해제 기능 **********/
$(".notice-all-select").click(function() {
    if($(this).text() == "전체 선택"){
        allClick($("input[name=notice]"), true);
        $(this).text("전체 해제");
    }
    else if($(this).text() == "전체 해제"){
        allClick($("input[name=notice]"), false);
        $(this).text("전체 선택");
    }
})

$(".board-all-select").click(function() {
    if($(this).text() == "전체 선택"){
        allClick($("input[name=post]"), true);
        $(this).text("전체 해제");
    }
    else if($(this).text() == "전체 해제"){
        allClick($("input[name=post]"), false);
        $(this).text("전체 선택");
    }
})
/*****************************************/


$(".edit-btn").click(function() {
    location.href = $(this).val();
})


$(".notice-specific-delete").click(function() {
    (async function(){
        for(let i = 0; i < $("input[name=notice]").length; i++){
            if($("input[name=notice]")[i].checked == true){
                deleteData($("input[name=notice_url]")[i].value);
            }
        }
    })().then(v => {
        alert("공지글이 삭제 되었습니다.");
        location.reload();
    })
})

$(".board-specific-delete").click(function() {
    (async function(){
        for(let i = 0; i < $("input[name=post]").length; i++){
            if($("input[name=post]")[i].checked == true){
                deleteData($("input[name=post_url]")[i].value);
            }
        }
    })().then(v => {
        alert("게시글이 삭제 되었습니다.");
        location.reload();
    })
})

function deleteData(url){
    return new Promise(function(resolve, reject) {
        fetch(url, {
            method : "DELETE"
        }).then(res => res.json())
        .then(res => {
            resolve();
            // alert(res.message);
            // location.href = res.redirect;
        });
    });

}


function allClick($selector, bool){
    $selector.prop("checked", bool);
}