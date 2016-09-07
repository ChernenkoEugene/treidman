$(document).ready(function() {
    $(".fancybox").fancybox();

    if ($(window).width() < 992) {
        $(".top_header_bl1 .container").removeClass("container");
        $(".top_header_bl1 .row").removeClass("row");
        $(".top_header__phone_num_block").insertBefore(".callback_block");
        $(".download_price").insertAfter(".catalog_block");
        $(".left_aside__managers").insertAfter(".download_price");
    }
    $(".sandwich").on('click', function() {
        $('.top_header__menu').toggle(200);
         $(this).toggleClass('active');
    });


});
