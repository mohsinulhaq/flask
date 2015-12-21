function replace(element, from) {
    $.get(from, function(data) {
        $(element).replaceWith($(data));
    });
}

$(function() {    
    $('.form').submit(function(e) {
        e.preventDefault();
        var searchBox = $('.search-box').val().trim();
        $.getJSON('https://api.github.com/users/' + searchBox, function(data) {
            $('.image').attr({
                src: data.avatar_url,
                height: '150px',
                width: '150px'
            });
            $('.name').text(data.name);
            $('.profile').attr('href', data.html_url).text('Click here');
            $('.id').text(data.id);
            $('.followers').text(data.followers);
            $('.repos').text(data.public_repos);
            $('.overlay').slideDown();
        });
    });
    
    $(document).click(function(e) {
        var overlay = $('.overlay');
        if (!overlay.is(e.target)) {
            overlay.hide();
        }
    });
});
