$(document).ready(function() {
    $(".fancybox").fancybox();

    if ($(window).width() < 992) {
        $(".top_header_bl1 .container").removeClass("container");
        $(".top_header_bl1 .row").removeClass("row");
        $(".top_header__phone_num_block").insertBefore(".callback_block");
        $(".download_price").insertAfter(".catalog_block");
        $(".left_aside__managers").insertAfter(".download_price");
        $(".download_price.catalog_pg").insertAfter(".paginator");
        $(".left_aside__managers.catalog_pg").insertAfter(".download_price.catalog_pg");
        $(".download_price.product_pg").insertAfter(".viewed");
        $(".left_aside__managers.product_pg").insertAfter(".download_price.product_pg");
        $(".catalog_filter_h6").on('click', function() {
            $(".catalog_filter").toggleClass('open');
            $(".filter_arw").toggleClass('open');
        });
        $(".same_products_wider .col-sm-3").removeClass("col-sm-3").addClass("col-sm-4");
    }
    $(".sandwich").on('click', function() {
        $('.top_header__menu').toggle(200);
        $(this).toggleClass('active');
    });
    if ($(window).width() < 500) {
        $(".paginator .prev").html("<");
        $(".paginator .next").html(">");
    }
    $(window).resize(function() {
        if ($(window).width() < 500) {
            $(".paginator .prev").html("<");
            $(".paginator .next").html(">");
        }
    });
    /* ==============================filter=========================*/


    jQuery("input#minCost").change(function() {

        var value1 = jQuery("input#minCost").val();
        var value2 = jQuery("input#maxCost").val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            jQuery("input#minCost").val(value1);
        }
        jQuery("#slider").slider("values", 0, value1);
    });


    jQuery("input#maxCost").change(function() {

        var value1 = jQuery("input#minCost").val();
        var value2 = jQuery("input#maxCost").val();

        if (value2 > 15000) {
            value2 = 15000;
            jQuery("input#maxCost").val(15000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            jQuery("input#maxCost").val(value2);
        }
        jQuery("#slider").slider("values", 1, value2);
    });


    // фильтрация ввода в поля
    jQuery('.formCost input').keypress(function(event) {
        var key, keyChar;
        if (!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);

        if (!/\d/.test(keyChar)) return false;

    });
    /*=====================end_filter========================*/

    // tabs
    (function($) {
        $(function() {

            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

            });


        });
    })(jQuery);
// tabs2
    (function($) {
        $(function() {

            $('ul.tabs__caption2').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs2').find('div.tabs__content2').removeClass('active').eq($(this).index()).addClass('active');

            });


        });
    })(jQuery);
});
