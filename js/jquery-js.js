"use strict"
$(document).ready(function() {
	// alert( 'The DOM has finished loading!' );
});
// $('*').css('border', '1px solid #F00',)
// $('*').css('margin', '0')


//Samples

// 1. ID Selector with added JS to alert contents of h1 ********
// var contents = $('#codeup').html();
// alert(contents);

// 2. Using Class Selector **********
// $('.important').css('background-color', 'yellow');

// 3. Element Selector ********
// $('p') will get all p element
// $('p').css('font-size', '32px')

// 4. Multiple Selector *******
// $('selector 1', selector 2', etc) separated by commas
// $('.important, p, #class')
// $('.important, p').css('background-color', '#FF0');

/*
Id Selectors

Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
Add several attributes to your elements; you will need both id and class attributes.
Use jQuery to select an element by the id. Alert the contents of the element.
Update the jQuery code to select and alert a different id.
Use the same id on 2 elements. How does this change the jQuery selection?
Remove the duplicate id. Each id should be unique on that page.
* */

// var contentAlert = $('#main-header').html();alert(contentAlert)
$('#main-header, #main-section-paragraph').css('color', 'blue')

$('li').css('font-size', '16px')
// $('h1, p, li').css('background-color', 'yellow')


$('h1').click(function () {
	$(this).css('background-color', 'red')
});

$(document).ready(function() {
	$(".red").hover(function() {
		$(this).css("background-color", "red");
	}, function() {
		$(this).css("background-color", "orange");
	});
});


$(document).ready(function() {
	$(".orange").hover(function() {
		$(this).css("background-color", "orange");
	}, function() {
		$(this).css("background-color", "red");
	});
});

$(document).ready(function() {
	$(".yellow").hover(function() {
		$(this).css("background-color", "yellow");
	}, function() {
		$(this).css("background-color", "white");
	});
});

$(document).ready(function() {
	$(".green").hover(function() {
		$(this).css("background-color", "green");
	}, function() {
		$(this).css("background-color", "white");
	});
});

$(document).ready(function() {
	$(".blue").hover(function() {
		$(this).css("background-color", "blue");
	}, function() {
		$(this).css("background-color", "white");
	});
});










