
var c; // för canvas
var ctx;
// pictures
var map = new Image();
map.src = "5KMap.png"
var arrow = new Image();
arrow.src = "arrow.png"
var circle = new Image();
circle.src = "circle.png"
var soundeffect;

var rolled = false; // false = ej klickat true = klickad


// körs när sidan laddats in
function init(){
    c  = document.getElementById("_canvas");
    ctx = c.getContext("2d");
    ctx.drawImage(map, 0, 0, 1000, 1000);
    soundeffect = new sound("arrowsound.mp3")
}
window.onload = init;

// consturctor för ljud filer
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}



function roll(){

    var spots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; 
    var randomspot = spots[Math.floor(Math.random()*spots.length)]; // random nummer från array
  
    while(rolled === false){
        if (randomspot === 1){ 
            console.log("salty springs");
            drawarrow(565, 609); // salty springs
            rolled = true;  
        }
        else if (randomspot === 2){
            console.log("tilted tower");
            drawarrow(360, 470); // tilted towers
            rolled = true;

        }
        else if (randomspot === 3){
            console.log("dusty depot");
            drawarrow(582, 448); // dusty depot
            rolled = true;
        }
        else if (randomspot === 4){
            console.log("Fatal fields");
            drawarrow(595, 728); // fatal fields
            rolled = true;
        }
        else if (randomspot === 5){
            console.log("Tomato town");
            drawarrow(658, 306); // tomatoe town
            rolled = true;
        }
        else if (randomspot === 7){
            console.log("Reatail row");
            drawarrow(738, 499); // retail row
            rolled = true;
        }
        else if (randomspot === 8){
            console.log("Moisty Mire");
            drawarrow(830, 749); // moisy mire
            rolled = true;

        }
        else if (randomspot === 9){
            console.log("Lonely lodage");
            drawarrow(887,390); // llonely lodge
            rolled = true;
        }
        else if (randomspot === 10){
            console.log("Anrchy arces");
            drawarrow(534,182); // anarchy arces
            rolled = true;
        }
        else if (randomspot === 11){
            console.log("Loot lake");
            drawarrow(434,348); // loot lake
            rolled = true;
        }
        else if (randomspot === 12){
            console.log("shify shafts");
            drawarrow(369,615); // shify shafts
            rolled = true;
        }
        else if (randomspot === 13){
            console.log("Greasy grove");
            drawarrow(230,583); // Greasy grove
            rolled = true;
        }
        else if (randomspot === 14){
            console.log("pleasant park");
            drawarrow(278,275); // plaesant park
            rolled = true;
        }
        else if (randomspot === 15){
            console.log("haunted hils");
            drawarrow(150,196); // haunted hills
            rolled = true;
        }
        else if (randomspot === 16){
            console.log("snoby shores");
            drawarrow(82,422); // snobby shores
            rolled = true;
        }
        else if (randomspot === 17){
            console.log("flush factory");
            drawarrow(350,845); // flush factory
            rolled = true;
        }
        else if (randomspot === 18){
            console.log("lucky landing");
            drawarrow(568,895); // lucky landing
            rolled = true;
        }
        
        
        
        
    
    }

}



function drawarrow(x,y){
    soundeffect.play();
    ctx.drawImage(arrow, x - 125, y - 50, 100, 100); // ritar ut pilen på x och y kordinaterna som anggavs
}

function resetroll(){  
    ctx.drawImage(map, 0, 0, 1000, 1000); // ritar upp en tom karta
    rolled = false; // gör det möjligt att köra igen

    console.log("reset " + rolled)
}

function test(){
    var letter = ["a","b","c","d","e","f","g","h","i","j"];

    var randomletter = letter[Math.floor(Math.random()*letter.length)];
    var randomnumber = Math.floor((Math.random()*10)+1);
    console.log(randomletter + " + " + randomnumber );

    //ctx.drawImage(circle, x, y, 10, 10);
    //ctx.fillRect(x, y, 100, 100)
}





