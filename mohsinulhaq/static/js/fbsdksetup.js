function updateStatusCallback(response) {
	if (response.status === 'connected') {
	  	testAPI();
	} 
	else if (response.status === 'not_authorized') {
	  	console.log('Please log into this app.');
	} 
	else {
	  	console.log('Please log into Facebook.');
	}
}

function testAPI() {
    FB.api('/me?fields=name,email,birthday', function(response) {
        if (response && !response.error) {
            $('.myname').text(response.name);
            $('.email').text(response.email);
            $('.birthday').text(response.birthday);
            $('.id').text(response.id);
        }
    });

    FB.api('/me/picture?type=large', function(response) {
        if (response && !response.error) {
            $('.profile-pic').attr('src', response.data.url);
        }
    });
}

$(function() {
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
        FB.init({
    	    appId      : '1655478244702371',
    		cookie     : true,
    		xfbml      : true,
    		version    : 'v2.5'
        });
        FB.getLoginStatus(updateStatusCallback);
    });
});