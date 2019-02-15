//Carousel Pause and Play JQuery functions
$(document).ready(function () {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    //Show and Hide Login Modal using Javascript
    $('#loginButton').click(function () {
        $('#loginModal').modal('show');
    });
    $('#closeModal').click(function () {
        $('#loginModal').modal('hide');
    });     

    // Show and Hide Reserve Modal using Javascript
    $('#reserveButton').click(function () {
        $('#reserveform').modal('show');
    });  
    $('#closeButton').click(function () {
        $('#reserveform').modal('hide');
    });  
});