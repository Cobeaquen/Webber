var px = "px";
var txt = document.getElementById("hd1");
var bg01 = document.getElementById("bg01");
var bg02 = document.getElementById("bg02");

//addEventListener("scroll", onScroll)
var offsetY = 100/document.body.width + px;
bg02.style.backgroundPositionY = bg02.style.backgroundPositionY / document.body.width + "px";

function onScroll()
{
    var scroll = document.documentElement.scrollTop;
    if (scroll == 0)
        scroll = document.body.scrollTop;
    bg01.style.top = scroll * 0.425 + px;
    bg02.style.top = "2.5%" + scroll * 0.15 + px;
}