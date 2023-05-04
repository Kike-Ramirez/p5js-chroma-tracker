const colorBackgroundHex = "#00FF00";
const colorFrontHex = "#FFFFFF";

let jsondata;
let markers = [];
let displaySettings = false;
let settings;

function preload() {
  const url = "assets/template.json";
  jsondata = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectMode(CENTER);
  fill(jsondata.markercolor1);
  for (let index = 0; index < jsondata.markers.length; index++) {
    const x = jsondata.markers[index].xpos * windowWidth;
    const y = jsondata.markers[index].ypos * windowHeight;
    const scale = 0.5 * (windowWidth + windowHeight);
    const size = jsondata.markersize * scale;
    markers.push(
      new Trackpoint(
        x,
        y,
        size,
        jsondata.chromacolor,
        jsondata.markertype,
        jsondata.markercolor1,
        jsondata.markercolor2
      )
    );
  }
  settings = new Settings(jsondata, windowWidth, windowHeight);
}

function draw() {
  background(jsondata.chromacolor);
  for (let index = 0; index < markers.length; index++) {
    markers[index].render();
  }
  settings.render();
}

function mouseClicked() {
  //let fs = fullscreen();
  //fullscreen(!fs);
}

function doubleClicked() {
  displaySettings = !displaySettings;
  settings.setVisibility(displaySettings);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  const scale = 0.5 * (windowWidth + windowHeight);
  const size = jsondata.markersize * scale;
  for (let index = 0; index < markers.length; index++) {
    const x = jsondata.markers[index].xpos * windowWidth;
    const y = jsondata.markers[index].ypos * windowHeight;
    markers[index].resize(x, y, size);
  }
}
