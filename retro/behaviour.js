var px = "px";
var txt = document.getElementById("hd1");
var bg01 = document.getElementById("bg01");
var bg02 = document.getElementById("bg02");

addEventListener("scroll", onScroll)

function onScroll()
{
    var scroll = document.body.scrollTop;
    bg01.style.top = scroll * 0.5 + px;
    bg02.style.top = scroll * 0.15 + px;
}