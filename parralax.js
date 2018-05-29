var px = "px";
var par01 = document.getElementById("par01");
var par02 = document.getElementById("par02");
var par03 = document.getElementById("par03");

function onScroll()
{
    var scroll = document.documentElement.scrollTop;
    if (scroll == 0)
        scroll = document.body.scrollTop;
    par03.style.top = scroll * 0.425 + px;
    par02.style.top = scroll * 0.15 + px;
    par01.style.top = scroll * 0.05 + px;
}