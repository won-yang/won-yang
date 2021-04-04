$(".btn-edit").click(function(){
    let post_idx = $("input[name=post_idx]").val();
    
    location.href= '/admin/edit/' + post_idx; 
});

$(".btn-delete").click(function(){
    let post_idx = $("input[name=post_idx]").val();
    
    fetch('/notices/' + post_idx, {
        method : "DELETE"
    }).then(res => res.json())
    .then(res => {
        alert(res.message);
        location.href = res.redirect;
    });
});