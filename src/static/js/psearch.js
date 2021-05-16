const _this = this;
let board_backup;
$(document).ready(function () {
  $('#my-post').prop('checked', false);
});
$('.btn-search').click(function () {
  /*if(!(checkMonthlyRent(monthly_values))) return;*/
  search();
});
$('input[name=main_gate]').change(function () {
  search();
});
$('input[name=east_gate]').change(function () {
  search();
});
$('input[name=west_gate]').change(function () {
  search();
});
$('input[name=etc_gate]').change(function () {
  search();
});
$('input[name=my_post]').change(function () {
  if (_this.checked) {
    my_post();
    $('.pagination').hide();
  } else {
    $('.posts').children().remove();
    for (let i = 0; i < board_backup.length; i++) {
      $('.posts').append(board_backup[i]);
      $('.pagination').show();
    }
  }
});
const my_post = function () {
  const my_post = $('input[name=my_post]').is(':checked');
  const formData = new FormData();
  formData.append('my_post', my_post);
  $.ajax({
    type: 'GET',
    url: `/my_post?my_post=${my_post}`,
    dataType: 'json',
    processData: false,
    contentType: false,
    success(data) {
      board_backup = $('.posts').children();
      $('.posts').children().remove();
      const result = data;
      for (let i = 0; i < result.rows.length; i++) {
        const post = `<div class="col-md-6 col-sm-6 col-lg-4">\n\t\t\t\t\t\t<a href="/posts/${result.rows[i].post_idx}">\n\t\t\t\t\t\t<div class="card mb-4 shadow-sm">\n\t\t\t\t\t\t\t<div style="height: 225px; ">\n\t\t\t\t\t\t\t\t<img src="${result.image[i]}" alt="\uC9D1\uC0AC\uC9C4" style="width: 100%; height: 100%;">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t\t\t<h4> ${result.rows[i].title} </h4>\n\t\t\t\t\t\t\t\t<div class="d-flex justify-content-between align-items-center">\n\t\t\t\t\t\t\t\t\t<p>\uBCF4\uC99D\uAE08 ${result.rows[i].deposit}</p>\n\t\t\t\t\t\t\t\t\t<p>\uC6D4\uC138 ${result.rows[i].monthly_rent}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p>${result.rows[i].address}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>`;
        $('.posts').append(post);
      }
    },
  });
};
const search = function () {
  $('#my-post').prop('checked', false);
  const search = $('input[name=search]').val();
  const main_gate = $('input[name=main_gate]').is(':checked');
  const west_gate = $('input[name=west_gate]').is(':checked');
  const east_gate = $('input[name=east_gate]').is(':checked');
  const etc_gate = $('input[name=etc_gate]').is(':checked');
  const monthly_rent = $('input[name=monthly_rent]').val();
  const formData = new FormData();
  formData.append('search', search);
  formData.append('main_gate', main_gate);
  formData.append('west_gate', west_gate);
  formData.append('east_gate', east_gate);
  formData.append('etc_gate', etc_gate);
  location.href = `/search?search=${search}&main_gate=${main_gate}&west_gate=${west_gate}&east_gate=${east_gate}&etc_gate=${etc_gate}&monthly_rent=${monthly_rent}`;
};
const paging = function (data) {
  $('.paging').children().remove();
  if (data.post_row.length != 0) {
    let html =
      '<nav aria-label="Page navigation example">\n    \t\t\t\t  <ul class="pagination">\n    \t\t\t\t    <li class="page-item">\n    \t\t\t\t      <a class="page-link" {{prev}} aria-label="Previous">\n    \t\t\t\t        <span aria-hidden="true">&laquo;</span>\n    \t\t\t\t      </a>\n    \t\t\t\t    </li>\n    \t\t\t\t    \n    \t\t\t\t    <% for(let i=page_info.pnStart; i<=page_info.pnEnd; i++){ %> \n    \t\t\t\t    \t<li <%if(i===page_info.pageNum){%> \n    \t\t\t\t    \t\t\tclass="page-item active"\n    \t\t\t\t        \t<%}%>>\n    \t\t\t\t        \t<a class="page-link" href="?pageNum=<%=i%>"><%=i%></a>\n    \t\t\t\t        </li>\n    \t\t\t\t      <% } %>\n    \t\t\t\t      \n    \t\t\t\t    <li class="page-item">\n    \t\t\t\t      <a class="page-link" {{next}} aria-label="Next">\n    \t\t\t\t        <span aria-hidden="true">&raquo;</span>\n    \t\t\t\t      </a>\n    \t\t\t\t    </li>\n    \t\t\t\t  </ul>';
    if (data.page_info.pageNum > 1) html = html.replace('{{prev}}', `href="?pageNum=${Number(data.page_info.pageNum) - 1}`);
    else {
      html = html.replace('{{prev}}', '');
    }
    if (data.page_info.pageNum < page_info.pnTotal) {
      html = html.replace('{{next}}', `href="?pageNum=${Number(data.page_info.pageNum) + 1}`);
    } else {
      html = html.replace('{{next}}', '');
    }
  }
};
const checkMonthlyRent = function (monthly_values) {
  if (monthly_values > 100) {
    alert('희망 월세를 100이하로 해주세요');
    return false;
  }
  return true;
};
