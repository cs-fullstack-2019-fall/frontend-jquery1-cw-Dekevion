$('redText').addClass('redText');



$('#myElement').addClass('blueText');

$('#myElement').click(function () {
    alert('MyElement was Clicked')
});

$('#green').addClass('pink');
$('#pink').addClass('green');

// !! : this function only runs once 
$(document).ready( function () {

    $('#page').hide(1000,);
    $('#page').show(3000);

});

// !! : the counter serves no purpose 
counter = 0;
$('#click').click(function () {
   $('tr').addClass('grayText');
    counter+2
});