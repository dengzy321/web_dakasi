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
<!--导航栏下拉菜单 结束-->

<!--选项卡效果 开始-->
window.onload = function () {
    var oBox = document.getElementById('ISL_Cont_1');
    var aLi = oBox.getElementsByTagName('img');
    var oCon = document.getElementById('scroll-con');
    var aDiv = oCon.getElementsByTagName('figure');

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;   //为每个li添加对应的索引index
        aLi[i].onmousemove = function () {   //循环为每个li添加onmousemove事件
            for (var i = 0; i < aLi.length; i++) {
                aDiv[i].style.display = 'none';  //循环隐藏所有div
            }
            aDiv[this.index].style.display = 'block';   //this.index 获取当前li对应的索引
        };
    }

    <!--no7 开始-->

    var no7_ul = document.getElementById("no7_ul");
    var no7_li = no7_ul.getElementsByTagName("li");
    var no7_content = document.getElementById("no7_content");
    var no7_div = no7_content.getElementsByClassName("no7_con_list");

    for (var i = 0; i < aLi.length; i++) {
        no7_li[i].index = i;   //为每个li添加对应的索引index
        no7_li[i].onmousemove = function () {   //循环为每个li添加onmousemove事件
            for (var i = 0; i < no7_li.length; i++) {
                no7_li[i].className = '';  //循环清空li样式
                no7_div[i].style.display = 'none';  //循环隐藏所有div
            }
            this.className = 'no7_active';  //当前点击的元素样式变成active
            no7_div[this.index].style.display = 'block';   //this.index 获取当前li对应的索引
        };
    }

};
<!--选项卡效果 结束-->

<!--No 4 结束-->


var speed=50;
var fig12=document.getElementById("fig12");
var fig11=document.getElementById("fig11");
var fig=document.getElementById("fig");
fig12.innerHTML=fig11.innerHTML; //克隆fig1为fig2
function Marquee1(){
//当滚动至fig1与fig2交界时
    if(fig12.offsetTop-fig.scrollTop<=0){
        fig.scrollTop-=fig11.offsetHeight; //fig跳到最顶端
    }else{
        fig.scrollTop++
    }
}
var MyMar1=setInterval(Marquee1,speed);//设置定时器
//鼠标移上时清除定时器达到滚动停止的目的
fig.onmouseover=function() {clearInterval(MyMar1)};
//鼠标移开时重设定时器
fig.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)};

<!--No7 公司动态 结束-->


var fig22=document.getElementById("fig22");
var fig21=document.getElementById("fig21");
var fig2=document.getElementById("fig2");
fig22.innerHTML=fig21.innerHTML; //克隆fig1为fig2
function Marquee2(){
//当滚动至fig1与fig2交界时
    if(fig22.offsetTop-fig2.scrollTop<=0){
        fig2.scrollTop-=fig21.offsetHeight; //fig跳到最顶端
    }else{
        fig2.scrollTop++
    }
}
var MyMar2=setInterval(Marquee2,speed);//设置定时器
//鼠标移上时清除定时器达到滚动停止的目的
fig2.onmouseover=function() {clearInterval(MyMar2)};
//鼠标移开时重设定时器
fig2.onmouseout=function(){MyMar2=setInterval(Marquee2,speed)};
<!--No7 行业新闻 结束-->


var fig32=document.getElementById("fig32");
var fig31=document.getElementById("fig31");
var fig3=document.getElementById("fig3");
fig32.innerHTML=fig31.innerHTML; //克隆fig1为fig2
function Marquee3(){
//当滚动至fig1与fig2交界时
    if(fig32.offsetTop-fig3.scrollTop<=0){
        fig3.scrollTop-=fig31.offsetHeight; //fig跳到最顶端
    }else{
        fig3.scrollTop++
    }
}
var MyMar3=setInterval(Marquee3,speed);//设置定时器
//鼠标移上时清除定时器达到滚动停止的目的
fig3.onmouseover=function() {clearInterval(MyMar3)};
//鼠标移开时重设定时器
fig3.onmouseout=function(){MyMar3=setInterval(Marquee3,speed)};

<!--No7 媒体报道 结束-->


var fig42=document.getElementById("fig42");
var fig41=document.getElementById("fig41");
var fig4=document.getElementById("fig4");
fig42.innerHTML=fig41.innerHTML; //克隆fig1为fig2
function Marquee4(){
//当滚动至fig1与fig2交界时
    if(fig42.offsetTop-fig4.scrollTop<=0){
        fig4.scrollTop-=fig41.offsetHeight; //fig跳到最顶端
    }else{
        fig4.scrollTop++
    }
}
var MyMar4=setInterval(Marquee4,speed);//设置定时器
//鼠标移上时清除定时器达到滚动停止的目的
fig4.onmouseover=function() {clearInterval(MyMar4)};
//鼠标移开时重设定时器
fig4.onmouseout=function(){MyMar4=setInterval(Marquee4,speed)};

<!--No7 茶饮头条 结束-->


/*NO 7 结束*/

<!--首页结束 -->

<!--招商加盟  开始-->

$(document).ready(function(){
    $("tr:even").css("background-color","yellow");
});

<!--招商加盟  结束-->



