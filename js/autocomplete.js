var tags = [
"ActionScript", 
"AppleScript", 
"Asp", 
"BASIC", 
"C", 
"C++", 
"Clojure", 
"COBOL", 
"ColdFusion", 
"Erlang", 
"Fortran", 
"Groovy", 
"Haskell", 
"Java", 
"JavaScript", 
"Lisp", 
"Perl", 
"PHP", 
"Python", 
"Ruby", 
"Scala", 
"Scheme"
];

$(function() {

    $('.autocomplete').autocomplete({
        minLength: 0,
        source: tags,
        focus: function(event, ui) {
            $('.list-group>.list-group-item').each(function() {
                $(this).css('background-color', '#fffff');
            });
            var menu = $(this).autocomplete('instance').menu.element,
            focused = menu.find('a.ui-state-focus');
            focused.css('background-color', '#2980b9');
            return false;
        },
        select: function(event, ui) {
            $('.box>a>.placeholder').css('color', 'rgba(0,0,0,0.8)')
                                    .text(ui.item.value);
            $('.list').slideUp('fast');
        },
        close: function( event, ui ) {
            $('.box').css('border-color', 'rgba(0,0,0,0.2)');
        }
    });
    
    var widgetInst = $(".autocomplete").autocomplete({}).autocomplete('instance');
    
    widgetInst._renderItem = function(ul, item) {
        return $('<a href="javascript:void(0)">')
            .append(item.label)
            .addClass('list-group-item')
            .css('width', $('.autocomplete').css('width'))
            .appendTo(ul);
    };
    
    widgetInst._renderMenu = function(ul, items) {
        var that = this;
        $(ul).addClass('list-group');
        $.each(items, function(index, item) {
            that._renderItemData(ul, item);
        });
    };

    $('.box').click(function() {
        if (!$('.list').is(':visible')) {
            $(this).css('border-color', '#2980b9');
            $('.list').slideDown('fast');
            $('.autocomplete').autocomplete('search', '');
            $('.autocomplete').focus();
        }
    });
    
    $('.autocomplete').focusout(function() {
        $('.list').slideUp('fast');
    });

    $('.list').append($('.ui-autocomplete'));

})