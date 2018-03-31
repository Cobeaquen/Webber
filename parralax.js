var imgs = [
document.getElementById("par01"),
document.getElementById("par02"),
document.getElementById("par03"),
];

addEventListener("scroll", scrolling);

function scrolling() {
    document.getElementById("status").innerHTML = "scrolling!!";
    var currentScroll = document.body.scrollTop;
    document.getElementById("status").innerHTML = currentScroll;
    document.getElementById("jump").style.top = currentScroll * 0.8;
    document.getElementById("jump02").style.top = currentScroll * 0.7;
    document.getElementById("jump03").style.top = currentScroll * 0.6;
    //for (var i = 0; i < imgs.length; i++) {
    //    imgs[i].style.position = "absolute";
    //    imgs[i].style.top = (currentScroll*(i/3.5));
    //}
}