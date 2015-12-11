$(function() {
	$('.search-button').click(function() {
		var searchBox = $('.search-box');
		$.ajax({
			url: 'https://api.github.com/search/users',
			type: 'GET',
			dataType: 'json',
			data: {'q': searchBox.val().trim()},
			success: function(data) {
				$('.image').attr({src:data.items[0].avatar_url, height:'250px',width:'250px'});
				$('.profile').attr('href', data.items[0].html_url).text('Profile link');
				$('.id').text('Github ID: ' + data.items[0].id);
				$('.github-score').text('Github Score: ' + data.items[0].score);
			}
		});
	});
});