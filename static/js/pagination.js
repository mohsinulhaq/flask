const itemsPerPage = 10;

var array = []

// array = [
// 	{
// 		name: 'Mohsin Ul Haq',
// 		roll: '1',
// 		class: '10th',
// 		marks: '0'
// 	},
// 	{
// 		name: 'Arman Ul Haq',
// 		roll: '11',
// 		class: '1st',
// 		marks: '50'
// 	},
// 	{
// 		name: 'Akeel Ul Islam',
// 		roll: '2',
// 		class: '3rd',
// 		marks: '50'
// 	},
// 	{
// 		name: 'Yash Ballani',
// 		roll: '31',
// 		class: '12th',
// 		marks: '70'
// 	},
// 	{
// 		name: 'Paresh Rawal',
// 		roll: '11',
// 		class: '2nd',
// 		marks: '57'
// 	},
// 	{
// 		name: 'Pritesh Mittal',
// 		roll: '89',
// 		class: '5th',
// 		marks: '56'
// 	},
// ];

for (var i = 0; i < 100; ++i) {
    var char = String.fromCharCode('A'.charCodeAt() + i % 8);
    var obj = {
        name: char,
        roll: (i % 30).toString(),
        class: char + 'th',
        marks: (i * 50).toString()
    };
    array.push(obj);
}

function addSearchEventListeners(text, button, array) {
    $(button).click(function(e) {
        e.preventDefault();
        var value = $('.' + text + '-search-text').val().trim().toLowerCase();
        var searchArr = [];
        $.each(array, function(index) {
        	if (text == 'name') {
        		var split = this.name.split(' ');
            	$.each(split, function() {
	                if (this.slice(0, value.length).toLowerCase() == value) {
	                    searchArr.push(array[index]);
	                }
            	});
            }
            else {
            	if (value ? this[text] == value : true) {
                	searchArr.push(array[index]);
            	}
            }
        });
        paginate(searchArr, itemsPerPage);
    });
}

function paginate(array, itemsPerPage) {
    var length = array.length;
    var counter = 0;
    
    function render(from) {
        $('tbody').html('');
        $.each(array.slice(counter, counter + itemsPerPage), function(index) {
            $('tbody').append($row.clone());
            $($('.data-row')[index]).children('.name').text(this.name);
            $($('.data-row')[index]).children('.rollno').text(this.roll);
            $($('.data-row')[index]).children('.class').text(this.class);
            $($('.data-row')[index]).children('.marks').text(this.marks);
        });
    }
    
    function check() {
        if (counter == 0) {
            $('.prev').prop('disabled', true);
            $('.start').prop('disabled', true);
        } 
        else {
            $('.prev').prop('disabled', false);
            $('.start').prop('disabled', false);
        }
        
        if (counter >= length - itemsPerPage) {
            $('.next').prop('disabled', true);
            $('.end').prop('disabled', true);
        } 
        else {
            $('.next').prop('disabled', false);
            $('.end').prop('disabled', false);
        }
    }
    
    function updateStartEnd() {
    	$('.start-counter').text(counter);
    	$('.end-counter').text(array.length);
    }

    render(0);
    check();
    updateStartEnd();
    
    $('.prev').click(function() {
        counter -= itemsPerPage;
        render(counter);
        updateStartEnd();
        check();
    });
    
    $('.next').click(function() {
        counter += itemsPerPage;
        render(counter);
        updateStartEnd();
        check();
    });

    $('.start').click(function() {
        counter = 0;
        render(counter);
        updateStartEnd();
        check();
    });
    
    $('.end').click(function() {
    	var decrement = (array.length%itemsPerPage == 0) ? itemsPerPage : 0;
        counter = array.length - array.length%itemsPerPage - decrement;
        render(counter);
        updateStartEnd();
        check();
    });
}



$(function() {
    $row = $('.data-row').clone();
    
    paginate(array, itemsPerPage);

    addSearchEventListeners('name', '.name-search', array);
    addSearchEventListeners('roll', '.roll-search', array);
    addSearchEventListeners('class', '.class-search', array);
    addSearchEventListeners('marks', '.marks-search', array);

    $('.name-search-text, .roll-search-text, .class-search-text, .marks-search-text').focus(function() {
    	$(this).prev().children('input[type="checkbox"]').prop('checked', true);
    	$(this).unbind('focus');
    });

    $('.all-row-check').change(function() {
    	$.each($('.row-check'), function() {
    		$(this).prop('checked', !$(this).is(':checked'));
    	});
    });

    $(document).keydown(function(e) {
    	if (e.which == 13) {
    		var name = $('.name-search-enable').prop('checked') ? $('.name-search-text').val().trim().toLowerCase() : '';
    		var roll = $('.roll-search-enable').prop('checked') ? $('.roll-search-text').val().trim() : '';
    		var classs = $('.class-search-enable').prop('checked') ? $('.class-search-text').val().trim().toLowerCase() : '';
    		var marks = $('.marks-search-enable').prop('checked') ? $('.marks-search-text').val().trim() : '';
    		var searchArr = [];
    		$.each(array, function(index) {
    			var nameCondition = false;
    			var split = this.name.split(' ');
    			console.log(split);
    			$.each(split, function() {
    				console.log()
    				if (this.slice(0, name.length).toLowerCase() == name) {
	                    nameCondition = true;
	                    return false;
	                }
    			})

	    		var rollCondition = roll ? this.roll.toLowerCase()==roll : true;
	    		var classCondition = classs ? this.class.toLowerCase()==classs : true;
	    		var marksCondition = marks ? this.marks.toLowerCase()==marks : true;
	    		console.log(nameCondition);
    			if (nameCondition && rollCondition && classCondition && marksCondition) {
    				searchArr.push(array[index]);
    			}
    		});
    		paginate(searchArr, itemsPerPage);
    	}
    });
})