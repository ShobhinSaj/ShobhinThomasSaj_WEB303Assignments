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
        $(".tab_cntrl a").click(function (e) {
            e.preventDefault();
            var targetPanelId = $(this).attr("href").substring(1);
            showTab(targetPanelId);
        });

        function showTab(panelId) {
            $(".tab-panel").removeClass("active");
            $("#" + panelId).addClass("active");
        }
});