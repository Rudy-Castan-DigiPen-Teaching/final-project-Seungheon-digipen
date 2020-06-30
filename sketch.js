// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020

function preload(){
mmback = loadImage('image/sdfsfs.PNG')
pback = loadImage('image/real.PNG')
ar = loadImage('image/arrow.png')
cir = loadImage('image/playcircle.PNG')
heart = loadImage('image/heart.PNG')
  she = loadImage('image/shield.PNG')
}

const nummainmenu = 0
const numplay = 1
const numscoreboard = 2
const numoption = 3

let scene;

let menu;

let interval = 1000
let ad = 0

function setup() {
  createCanvas(850, 850);
menu = new main()
playscene = new play()
  
ad = millis()/1000

  playscene.arr()
setInterval(adjust,interval)
}


function draw() {
  background(220);  
if(playscene.speed >= 7){
playscene.su = 0
}

playscene.draw()
playscene.shape()
playscene.score()
playscene.go()
playscene.shield()
  playscene.over()

// menu.draw()
//   menu.button()
// console.log(scene)
}

function mouseClicked() {  
  let MX = mouseX;
  let MY = mouseY;
  console.log(MX + " / " + MY);
}

function adjust(){
playscene.arr()

// interval -= ad
//   if(interval <= 1000){
//   ad = 0
//   }
}
