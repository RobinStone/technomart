//-------------------- SLIDER --------------------------

$('#right').on('click', function(){
   $('.slide').toggleClass('active-slide');
});

$('#left').on('click', function(){
   $('.slide').toggleClass('active-slide');
});

//-------------------- SERVICES-BTN --------------------

$('.services-btn').on('click', function(){
    $('.button-item').removeClass('current-service');
    $(this).parent().addClass('current-service');
    
    var par = $(this).parent();
    var n= $(par).index();
    $('.services-item').removeClass('current-item');
    $('.services-list').children().eq(n).addClass('current-item');
});







