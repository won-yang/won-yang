$('.btn-edit-finish').click(function () {
    var title = $('input[name=title]').val();
    var content = getDataFromTheEditor();
    var post_idx = $('input[name=post_idx]').val();
    $.ajax({
        type: 'POST',
        url: '/admin/edit_ok',
        data: {
            title: title,
            content: content,
            idx: post_idx,
        },
        dataType: 'json',
        success: function (data) {
            var result = data;
            if (result.result == 'error') {
                alert(result.message);
                location.href = result.redirect;
            }
            else {
                alert(result.message);
                location.href = result.redirect;
            }
        },
    });
});
