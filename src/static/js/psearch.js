var _this = this;
var board_backup = [];
$(document).ready(function () {
    //$('#my-post').prop('checked', false);
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
    var checked = $('input[name=my_post]').is(':checked');
    
    if (checked) {
        my_post();
        $('.pagination').hide();
    }
    else {
        $('.posts').children().remove();
        for (var i = 0; i < board_backup.length; i++) {
            $('.posts').append(board_backup[i]);
            $('.pagination').show();
        }
    }
});

const getTag = (post) => {
  if (post.main_gate == '1') return '#창원대 정문';
  else if (post.west_gate == '1') return '#기숙사 서문';
  else if (post.east_gate == '1') return '#공대 동문';
  else if (post.etc_gate == '1') return '#기타';
  else return '#기타';
};


var my_post = function () {
  $('#main_gate').prop('checked', true);
  $('#east_gate').prop('checked', true);
  $('#west_gate').prop('checked', true);
  $('#etc_gate').prop('checked', true);
    var my_post = $('input[name=my_post]').is(':checked');
    var formData = new FormData();
    formData.append('my_post', my_post);
    $.ajax({
        type: 'GET',
        url: "/my_post?my_post=" + my_post,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function (data) {
            board_backup = $('.posts').children();
            $('.posts').children().remove();
            var result = data;
            for (var i = 0; i < result.post.length; i++) {
                let post = `<div class="col-md-6 col-sm-6 col-lg-4">
					<a href="/posts/${result.post[i].post_idx}">
						<div class="card mb-4 shadow-sm">
							<div style="height: 225px; ">
								<img src="${result.image[i]}" alt="집사진" style="width: 100%; height: 100%;">
							</div>
							<div class="card-body">
								<h4> ${result.post[i].title} </h4>
								<p> ${getTag(result.post[i])} </p>
                                <p>보증금 ${result.post[i].deposit}</p>
                                <p>월세 ${result.post[i].monthly_rent}</p>
                                <p>${result.post[i].address}</p>
                                <div class="post_date" align="right"><p><${result.post[i].post_date} </p></div>
							</div>
						</div>
						</a>
					</div>`;
                $('.posts').append(post);
            }
        },
    });
};
var search = function () {
   // $('#my-post').prop('checked', false);
    var search = $('input[name=search]').val();
    var main_gate = $('input[name=main_gate]').is(':checked');
    var west_gate = $('input[name=west_gate]').is(':checked');
    var east_gate = $('input[name=east_gate]').is(':checked');
    var etc_gate = $('input[name=etc_gate]').is(':checked');
    var monthly_rent = $('input[name=monthly_rent]').val();
    var formData = new FormData();
    formData.append('search', search);
    formData.append('main_gate', main_gate);
    formData.append('west_gate', west_gate);
    formData.append('east_gate', east_gate);
    formData.append('etc_gate', etc_gate);
    location.href = "/search?search=" + search + "&main_gate=" + main_gate + "&west_gate=" + west_gate + "&east_gate=" + east_gate + "&etc_gate=" + etc_gate + "&monthly_rent=" + monthly_rent;
};
var paging = function (data) {
    $('.paging').children().remove();
    if (data.post_row.length != 0) {
        var html = "<nav aria-label=\"Page navigation example\">\n    \t\t\t\t  <ul class=\"pagination\">\n    \t\t\t\t    <li class=\"page-item\">\n    \t\t\t\t      <a class=\"page-link\" {{prev}} aria-label=\"Previous\">\n    \t\t\t\t        <span aria-hidden=\"true\">&laquo;</span>\n    \t\t\t\t      </a>\n    \t\t\t\t    </li>\n    \t\t\t\t    \n    \t\t\t\t    <% for(let i=page_info.pnStart; i<=page_info.pnEnd; i++){ %> \n    \t\t\t\t    \t<li <%if(i===page_info.pageNum){%> \n    \t\t\t\t    \t\t\tclass=\"page-item active\"\n    \t\t\t\t        \t<%}%>>\n    \t\t\t\t        \t<a class=\"page-link\" href=\"?pageNum=<%=i%>\"><%=i%></a>\n    \t\t\t\t        </li>\n    \t\t\t\t      <% } %>\n    \t\t\t\t      \n    \t\t\t\t    <li class=\"page-item\">\n    \t\t\t\t      <a class=\"page-link\" {{next}} aria-label=\"Next\">\n    \t\t\t\t        <span aria-hidden=\"true\">&raquo;</span>\n    \t\t\t\t      </a>\n    \t\t\t\t    </li>\n    \t\t\t\t  </ul>";
        if (data.page_info.pageNum > 1)
            html = html.replace('{{prev}}', "href=\"?pageNum=" + (Number(data.page_info.pageNum) - 1));
        else
            html = html.replace('{{prev}}', '');
        if (data.page_info.pageNum < page_info.pnTotal)
            html = html.replace('{{next}}', "href=\"?pageNum=" + (Number(data.page_info.pageNum) + 1));
        else
            html = html.replace('{{next}}', '');
    }
};
var checkMonthlyRent = function (monthly_values) {
    if (monthly_values > 100) {
        alert('희망 월세를 100이하로 해주세요');
        return false;
    }
    return true;
};