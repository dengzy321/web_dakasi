//定义全局变量和定时器
var i = 0;
var timer;

//创建一个Show函数
function Show() {
    //在这里可以用其他jquery的动画
    //用jquery方法设置第一张图片显示，其余隐藏
    $('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);

    //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
    $('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');

    /*
     * css中添加的代码：
     * .bg{ background-color: #f00; }
     * */
}

//创建一个showTime函数
function showTime() {
    //定时器
    timer = setInterval(function () {
        //调用一个Show()函数
        Show();
        i++;
        //当图片是最后一张的后面时，设置图片为第一张
        if (i == 10) {
            i = 0;
        }
    }, 2000);
}

$(document).ready(function () {
    //用jquery方法设置第一张图片显示，其余隐藏
    $('.ig').eq(0).show().siblings('.ig').hide();

    //调用showTime()函数（轮播函数）
    showTime();

    //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    $('.tab').hover(function () {
        //获取当前i的值，并显示，同时还要清除定时器
        i = $(this).index();
        Show();
        clearInterval(timer);
    }, function () {
        //
        showTime();
    })
});