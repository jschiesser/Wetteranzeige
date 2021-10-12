let APIKEY = "6c897f070ff5c68387abf0306fedce0c";
let city;

function setup() {
  
 //Hintergrund
 
  createCanvas(1000, 500);
  background("lightblue");
  frameRate(120);
    
 //Grass
  strokeWeight(0);
  
  fill(154,205,50);
  rect(0,450,1000,50);
  ellipse(100, 450, 390, 120);
  ellipse(400, 450, 475, 90);
  ellipse(750, 450 , 550, 100);
  
  
  city = createInput("");
  city.position(25, 25);
  city.size(175);
  city.input(myInputEvent);
  
  button = createButton('submit');
  button.position(200, 25, 65);
  button.mousePressed(mySubmitEvent);
  
}

function mySubmitEvent(){
  const name = city.value();
   queryAPI(name);
}


function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function queryAPI(value) {
  let url = "https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid="+APIKEY;
  httpGet(url, 'jsonp', false, function(response) {
    console.log(response);
  });
}

function draw() {
}
