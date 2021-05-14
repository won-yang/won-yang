$('.btn-edit').click(function () {
    var post_idx = $('input[name=post_idx]').val();
    location.href = '/edit/' + post_idx;
});
$('.btn-delete').click(function () {
    var post_idx = $('input[name=post_idx]').val();
    fetch('/posts/' + post_idx, {
        method: 'DELETE',
    })
        .then(function (res) { return res.json(); })
        .then(function (res) {
        alert(res.message);
        location.href = res.redirect;
    });
});
