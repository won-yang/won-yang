$('.btn-edit-finish').click(function () {
  const title = $('input[name=title]').val();
  const content = getDataFromTheEditor();
  const post_idx = $('input[name=post_idx]').val();
  $.ajax({
    type: 'POST',
    url: '/admin/edit_ok',
    data: {
      title,
      content,
      idx: post_idx,
    },
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
});
