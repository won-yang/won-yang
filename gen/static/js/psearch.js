let board_backup;
$(document).ready(() => {
  $('#my-post').prop('checked', false);
});

$('.btn-search').click(() => {
  /*if(!(checkMonthlyRent(monthly_values))) return;*/
  search();
});

$('input[name=main_gate]').change(() => {
  console.log('------------');
  search();
});
$('input[name=east_gate]').change(() => {
  search();
});
$('input[name=west_gate]').change(() => {
  search();
});
$('input[name=etc_gate]').change(() => {
  search();
});
$('input[name=my_post]').change(() => {
  if (this.checked) {
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

const my_post = () => {
  let my_post = $('input[name=my_post]').is(':checked');

  var formData = new FormData();
  formData.append('my_post', my_post);

  $.ajax({
    type: 'GET',
    url: `/my_post?my_post=${my_post}`,

    dataType: 'json',
    processData: false,
    contentType: false,
    success: (data) => {
      board_backup = $('.posts').children();
      $('.posts').children().remove();

      let result = data;

      for (let i = 0; i < result.rows.length; i++) {
        let post = `<div class="col-md-6 col-sm-6 col-lg-4">
						<a href="/posts/${result.rows[i].post_idx}">
						<div class="card mb-4 shadow-sm">
							<div style="height: 225px; ">
								<img src="${result.image[i]}" alt="집사진" style="width: 100%; height: 100%;">
							</div>
							<div class="card-body">
								<h4> ${result.rows[i].title} </h4>
								<div class="d-flex justify-content-between align-items-center">
									<p>보증금 ${result.rows[i].deposit}</p>
									<p>월세 ${result.rows[i].monthly_rent}</p>
								</div>
								<p>${result.rows[i].address}</p>
							</div>
						</div>
						</a>
					</div>`;

        $('.posts').append(post);
      }
    },
  });
};

const search = () => {
  $('#my-post').prop('checked', false);

  let search = $('input[name=search]').val();
  let main_gate = $('input[name=main_gate]').is(':checked');
  let west_gate = $('input[name=west_gate]').is(':checked');
  let east_gate = $('input[name=east_gate]').is(':checked');
  let etc_gate = $('input[name=etc_gate]').is(':checked');
  let monthly_rent = $('input[name=monthly_rent]').val();
  var formData = new FormData();

  formData.append('search', search);
  formData.append('main_gate', main_gate);
  formData.append('west_gate', west_gate);
  formData.append('east_gate', east_gate);
  formData.append('etc_gate', etc_gate);

  location.href = `/search?search=${search}&main_gate=${main_gate}&west_gate=${west_gate}&east_gate=${east_gate}&etc_gate=${etc_gate}&monthly_rent=${monthly_rent}`;
};

const paging = (data) => {
  $('.paging').children().remove();

  if (data.post_row.length != 0) {
    let html = `<nav aria-label="Page navigation example">
    				  <ul class="pagination">
    				    <li class="page-item">
    				      <a class="page-link" {{prev}} aria-label="Previous">
    				        <span aria-hidden="true">&laquo;</span>
    				      </a>
    				    </li>
    				    
    				    <% for(let i=page_info.pnStart; i<=page_info.pnEnd; i++){ %> 
    				    	<li <%if(i===page_info.pageNum){%> 
    				    			class="page-item active"
    				        	<%}%>>
    				        	<a class="page-link" href="?pageNum=<%=i%>"><%=i%></a>
    				        </li>
    				      <% } %>
    				      
    				    <li class="page-item">
    				      <a class="page-link" {{next}} aria-label="Next">
    				        <span aria-hidden="true">&raquo;</span>
    				      </a>
    				    </li>
    				  </ul>`;

    if (data.page_info.pageNum > 1) html = html.replace('{{prev}}', `href="?pageNum=${Number(data.page_info.pageNum) - 1}`);
    else html = html.replace('{{prev}}', '');

    if (data.page_info.pageNum < page_info.pnTotal) html = html.replace('{{next}}', `href="?pageNum=${Number(data.page_info.pageNum) + 1}`);
    else html = html.replace('{{next}}', '');
  }
};

const checkMonthlyRent = (monthly_values) => {
  if (monthly_values > 100) {
    alert('희망 월세를 100이하로 해주세요');
    return false;
  }
  return true;
};
