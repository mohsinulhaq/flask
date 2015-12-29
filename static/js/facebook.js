const number_of_friends = 12;
const top_number = 10;
const bottom_number = 5;
const special_number = 8; 

var friends = [];

for (var i=0; i<number_of_friends; ++i) {
	var char = String.fromCharCode('A'.charCodeAt() + i);
	var obj = {
			name : char,
			photo : 'http://placehold.it/200?text=' + char
		};
	friends.push(obj);
}

// function shuffle(arr) {
//     var shuffled = arr.slice(0), i = arr.length, temp, index;
//     while (i--) {
//         index = Math.floor(i * Math.random());
//         temp = shuffled[index];
//         shuffled[index] = shuffled[i];
//         shuffled[i] = temp;
//     }
//     return shuffled;
// }

// friends = shuffle(friends);

function all() {
	$.each($('.photo'), function(index) {
		$(this).attr('src', friends[index].photo);
	});
	$.each($('.name'), function(index) {
		$(this).text(friends[index].name);
	});
}

function top10() {
	$.each($('.photo'), function(index) {
		$(this).attr('src', '');
	});
	$.each($('.name'), function(index) {
		$(this).text('');
	});

	$.each($('.photo'), function(index) {
		$(this).attr('src', friends[index].photo);
		if (index == top_number - 1) {
			return false;
		}
	});
	$.each($('.name'), function(index) {
		$(this).text(friends[index].name);
		if (index == top_number - 1) {
			return false;
		}
	});
}

function bottom5() {
	$.each($('.photo'), function(index) {
		$(this).attr('src', '');
	});
	$.each($('.name'), function(index) {
		$(this).text('');
	});

	$.each($('.photo'), function(index) {
		$(this).attr('src', friends[number_of_friends - bottom_number + index].photo);
		if (index == bottom_number) {
			return false;
		}
	});
	$.each($('.name'), function(index) {
		$(this).text(friends[number_of_friends - bottom_number + index].name);
		if (index == bottom_number) {
			return false;
		}
	});
}

function special() {
	$.each($('.photo'), function(index) {
		$(this).attr('src', '');
	});
	$.each($('.name'), function(index) {
		$(this).text('');
	});

	$('.photo:first').attr('src', friends[special_number].photo)
}

$(function() {
	$('.collapse>ul').append('<li>\
								<a href="javascript:void(0)">\
									<fb:login-button scope="email, user_birthday" autologoutlink="true" data-size="large" onlogin="location.reload();">\
									</fb:login-button>\
								</a>\
							</li>');
	$('.all').click(all);
	$('.top').click(top10);
	$('.bottom').click(bottom5);
	$('.special').click(special);
})