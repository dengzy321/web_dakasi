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
/*导航栏 结束*/

$.validator.setDefaults({
    submitHandler: function () {
        alert("留言提交成功!");
    }
});

$().ready(function () {
    $("#validateForm").validate({
        rules: {
            name: "required",
            phone: {
                required: true,
                minlength: 11,
                isMobile: true
            },
            address: "required",
            email: "required",
            "topic[]": {
                required: "#newsletter:checked",
                minlength: 2
            }
        },
        messages: {
            name: "请输入您的名字",
            phone: {
                required: "请输入您的手机号码",
                minlength: "请输入正确的手机号码",
                isMobile: "请正确填写您的手机号码"
            },
            address: "请输入您的所在地址",
            email: "请输入您的邮箱",
            "topic[]": {
                required: "请选择两个渠道",
                minlength: "至少选择两个渠道"
            }
        }
    });

    /*$('#checkbox').click(function () {
        if ($('#checkbox')[0].checked == false) {
            $('#newsletter_topics').css('display', 'none');
        } else {

            $('#newsletter_topics').css('display', 'block');
        }
    });*/
});
<!--联系我们结束-->