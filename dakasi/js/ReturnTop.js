var div = document.getElementById("ReturnTop");
window.onscroll = function () {
    if (scroll().top <= 100) {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
};
$(function () {
    $("#ReturnTop").click(function () {
        $("html,body").animate({scrollTop: 0}, 500);
    });
});
function scroll() {
    return {
        "top": document.documentElement.scrollTop + document.body.scrollTop,
        "left": document.documentElement.scrollLeft + document.body.scrollLeft
    }
}
