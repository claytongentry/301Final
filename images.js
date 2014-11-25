$(document).ready(function() {

    var regular = {width: "500px", height: "300px"};
    var enlarged = {width: "833px", height: "500px"};
    var count = 1;

    $("#Gloria").css(regular).on('click', function() {
        $(this).animate(count == 1) ? enlarged : regular);
        count = 1 - count;
    });

});
