  var t = 0;
  var T = 0;
  var angle = 0;//PI;
  var angle2 = 0;
  
  let color_day;
  let color_night;
  
  let ground_day;
  let ground_night;
  
  let backgroundColor;
  
  let moonColor;
  let sunColor;
  
  //let color1 = color(23, 23, 38);
  //let color2 = color(143, 196, 234);
  
  var sunRadius = 50;
  var moonRadius = 40;
  
  let sun = {x: 0, y: 0, color: null};
  let moon = {x: 0, y: 0, color: null};
  
  let ymiddle;
  let xmiddle;
  
  var r;
  
  function setup() {
	  
	  createCanvas(2560, 1440);
	  background(100);
	  frameRate(144);
	  
	  color_day = color(23, 23, 38);
	  color_night = color(143, 196, 234);
	  
	  moonColor = color(218, 217, 247);
	  sunColor = color(249, 228, 69);
	  
	  ground_day = color(113, 232, 127);
	  ground_night = color(69, 122, 62);
  
	  //var audio = new Audio('http://download.publicradio.org/podcast/minnesota/classical/programs/free-downloads/2017/02/13/daily_download_20170213_128.mp3');
	  //audio.play();
	  
	  ymiddle = height / 2;
	  xmiddle = width / 2;
	  
	  r = ymiddle;
  }
  
  function draw() {
	
	clear();
	
	var backgroundColor = lerpColor(color_day, color_night, T);
	background(backgroundColor);
	
    var a = xmiddle;
    var b = ymiddle + 200;
    
    angle += 1/100.0;
    
    if (angle >= 2 * PI) {
    	angle -= 2 * PI;
    }
    
    sun.x = a + r * cos(angle);
    sun.y = b + r * sin(angle);
    
    angle2 = angle - PI;
    
    moon.x = a + r * cos(angle2);
    moon.y = b + r * sin(angle2);
    
	fill(sunColor);
	stroke(2);
    circle(sun.x, sun.y, sunRadius); // draw sun
	
	fill(moonColor);
	stroke(2);
    circle(moon.x, moon.y, moonRadius); // draw moon
    
    //circle(a, b, 5, "red"); // debug
    
    T = (moon.y - sun.y) / (2 * r);
    
    T = map_range(T, -1, 1, 0, 1);
  	
    var groundColor = lerpColor(ground_night, ground_day, T);
    
	fill(groundColor);
	
    arc(a, b + 500, width + 600, height, PI, 0)
  }
  
  function lerp(y1, y2, mu) {
     return (y1*(1-mu)+y2*mu);
  }
  
  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }