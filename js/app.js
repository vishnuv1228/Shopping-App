$(document).ready(function () {

//click to add and validate form
	$('#button-add').click(function() {

		if(!$.trim($('#add').val())) {
			alert('Please enter an item.');
		} 
		else {
				$("ul").append('<li class="add-more"><img class="x" src="css/image/big_x.png"/><img class="circle" src="css/image/circle.png"/>' + $('input#add').val() + '</li>');
		}
	});

// using the enter key
	$('#add').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#button-add').click();
		};
	});
//delete list items
	
	$('ul').on('click', '.x', function(event) {
		event.preventDefault();
		$(this).parent().remove()
});

//cross out items
	$('ul').on('click', '.circle', function() {
		$(this).closest('li').toggleClass('done');
	});
// hiding empty, red block
	$('.done').hide();

});
