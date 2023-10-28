$(document).ready(function(){
    $('.accordion-control').on('click', function(e) {
        e.preventDefault();
        $('.accordion-panel').removeClass("active");
        $('.accordion-panel').hide();
        $(this).next('.accordion-panel').addClass("active");
        $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
        });
});