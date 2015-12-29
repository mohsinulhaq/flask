function phoneValidator(number) {
    var pattern = /^(((\+91)|\+91\-)|0?)[1-9]{1}\d{9}$/;
    if (pattern.test(number)) {
        return true;
    }
    return false;
}

function emailValidator(email) {
    var pattern = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    if (pattern.test(email)) {
        return true;
    }
    return false;
}

$(function() {
    $('.validationForm').submit(function(e) {
        e.preventDefault();
        var number = $('.number').val();
        var email = $('.email').val();
        if (phoneValidator(number) && emailValidator(email)) {
            alert('Your email ' + email + ' and number ' + number + ' are valid!');
        }
        else {
            alert('Invalid!');
        }
    });
});