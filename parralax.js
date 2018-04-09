var par01 = document.getElementById("par01");
var par02 = document.getElementById("par02");
var par03 = document.getElementById("par03");

addEventListener("scroll", scrolling);

function scrolling() {
    var currentScroll = document.body.scrollTop;
    par01.style.top = currentScroll*.6 + 'px';
    par02.style.top = currentScroll*.7 + 'px';
    par03.style.top = currentScroll*.8 + 'px';
}
