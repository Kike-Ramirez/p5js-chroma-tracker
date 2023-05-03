const colorBackgroundHex = "#00FF00";
const colorFrontHex = "#FFFFFF";

let jsondata;
let markers = [];

function preload() {
  // Get the most recent earthquake in the database
  const url = 'assets/template.json';
  jsondata = loadJSON(url);
  console.log(jsondata);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(jsondata.markercolor1);
  for (let index = 0; index < jsondata.markers.length; index++) {
    const x = jsondata.markers[index].xpos * windowWidth;
    const y = jsondata.markers[index].ypos * windowHeight;
    const size = jsondata.markersize * windowWidth;
    markers.push(new Trackpoint(x, y, size, jsondata.chromacolor, jsondata.markertype, jsondata.markercolor1, jsondata.markercolor2));
  }
  
}

function draw() {
  background(jsondata.chromacolor);
  for (let index = 0; index < markers.length; index++) {
    markers[index].render();
  }
}

function mouseClicked() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
