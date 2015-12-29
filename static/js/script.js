function replace(element, from) {
    $.get(from, function(data) {
        $(element).replaceWith($(data));
    });
}

function eraseCookies() {
    document.cookie.split(";")
    .forEach(function(c) { 
    	document.cookie = c.replace(/^ +/, "")
    	.replace(/=.*/, "=;expires=" + new Date()
    	.toUTCString() + ";path=/");
    });
}