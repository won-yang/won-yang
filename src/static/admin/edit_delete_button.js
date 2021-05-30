$('.btn-edit').click(function () {
  const post_idx = $('input[name=post_idx]').val();
  location.href = `/admin/edit/${post_idx}`;
});
$('.btn-delete').click(function () {
  const post_idx = $('input[name=post_idx]').val();
  fetch(`/notices/${post_idx}`, {
    method: 'DELETE',
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      alert(res.message);
      location.href = res.redirect;
    });
});
