$(document).ready(function() {
$('.header_burger').click(function(event){
    $('.header_burger,.header_menu,.main').toggleClass('active');
    $('body').toggleClass('lock');
    if ($('.header_burger,.header_menu,.main').hasClass('active')){
        $(".main").click(function(){
            $(".header_burger,.header_menu,.main").removeClass("active");
          });
        
    }
})
});




