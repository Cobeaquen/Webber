var px = "px";
//var txt = document.getElementById("hd1");
var logo = document.getElementById("logo");
var bg02 = document.getElementById("card1");

function onScroll()
{
    var scroll = document.documentElement.scrollTop;
    if (scroll == 0)
        scroll = document.body.scrollTop;
        console.log(scroll);
        document.getElementById("card1").style.top = scroll * 0.3 + px;
        document.getElementById("card2").style.top = scroll * -0.3 + px;
        //document.getElementById("card1").style.top = scroll * 0.15 + px;
}