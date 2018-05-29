$(function () {
    var nav = $(".nav-find"); //得到导航对象
    var win = $(window); //得到窗口对象
    var sc = $(document);//得到document文档对象。
    win.scroll(function () {
        if (sc.scrollTop() >= 640 && sc.scrollTop() <= 1550) {
            nav.addClass("nav-fix");
        } else {
            nav.removeClass("nav-fix");
        }
    });
});

$(document).ready(function () {
    $('#navbar > li > a').each(function () {
        if ($($(this))[0].href == String(window.location))
            $(this).parent().addClass('nav-active');
    });

    <!--导航栏下拉菜单 开始-->
    $("ul li").hover(function () {
            $(this).find("ul").show();
        },
        function () {
            $(this).find("ul").hide();
        })
});