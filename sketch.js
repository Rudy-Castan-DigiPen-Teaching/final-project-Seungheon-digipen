// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020

function preload(){
mmback = loadImage('image/menuback.PNG')
eback = loadImage('image/easyback.PNG')
hback = loadImage('image/playback.PNG')
ar = loadImage('image/arrow.png')

heart = loadImage('image/heart.PNG')
  she = loadImage('image/shield.PNG')
oback = loadImage('image/optionback.PNG')
sback = loadImage('image/scoreback.PNG')
  
  playback = loadSound('SOUND/play.mp3')
  hit = loadSound('SOUND/hit.wav')
  guard = loadSound('SOUND/guard.wav')
  over = loadSound('SOUND/over.wav')
  easyback = loadSound('SOUND/easy.mp3')
  menuback = loadSound('SOUND/menu.ogg')
}

const nummainmenu = 0
const numeasy = 1
const numhard = 2
const numscoreboard = 3
const numoption = 4

let scene=0
let status = false
let mode = 'easy'
let check = true
// let menu = true
// let one = true

function setup() {
createCanvas(850, 850);
menu = new main()
easyscene = new easy()
hardscene = new hard()
sbscene = new scoreboard(easyscene.high, hardscene.high)
oscene = new option()

hit.setVolume(0.5)
guard.setVolume(0.5)
over.setVolume(0.5)
playback.setVolume(0.25)
easyback.setVolume(0.25) 
menuback.setVolume(0.25) 
playback.playMode('restart')
  
menuback.loop()

setInterval(adjust, 300)


}


function draw() {
  background(220);
status = false
easyscene.check = false
easyscene.reset()
  
hardscene.check = false
hardscene.reset()
  
if(scene == numeasy){
easyscene.check = true
easyscene.draw()
easyscene.shape()
easyscene.score()
easyscene.go()
easyscene.shield()
easyscene.over()

status = true

}
else if(scene == numhard){
hardscene.check = true
hardscene.draw()
hardscene.shape()
hardscene.score()
hardscene.go()
hardscene.shield()
hardscene.over()

status = true

}
else if(scene == nummainmenu){
menu.draw()
menu.button()
menu.guide()
}
else if(scene == numscoreboard){
sbscene.draw()
sbscene.sort()
sbscene.button()
}
else if(scene == numoption){
oscene.draw()
oscene.button()
}

}


function keyReleased(){
if(keyCode == LEFT_ARROW&& status == false&&oscene.state == true){
oscene.backad-=1

}
else if(keyCode == RIGHT_ARROW&&status == false&&oscene.state == true){
oscene.backad+=1

}
if(keyCode == LEFT_ARROW&& status == false&&oscene.state == false){
oscene.sfxad-=1
hit.play()
}
else if(keyCode == RIGHT_ARROW&&status == false&&oscene.state == false){
oscene.sfxad+=1
  hit.play()
}
else if(keyCode == UP_ARROW&&status == false){
oscene.state = true
}
else if(keyCode == DOWN_ARROW&&status == false){
oscene.state = false
}
  
}

function mousePressed(){
if(mouseX <= width && mouseX >= 750 && mouseY <= 50 && mouseY >= 0&&(scene == nummainmenu||scene==numscoreboard)){mode = 'easy'
check = true}
else if(mouseX <= width && mouseX >= 750 && mouseY <= 100 && mouseY >= 50&&(scene == nummainmenu||scene==numscoreboard)){mode = 'hard'
check = false}
if(mode == 'easy' && mouseX <= 575 && mouseX >= 275 && mouseY <= 325 && mouseY >= 225&&scene == nummainmenu){
easyback.loop()
menuback.pause()
}
else if(mode == 'hard' && mouseX <= 575 && mouseX >= 275 && mouseY <= 325 && mouseY >= 225&&scene == nummainmenu){
playback.loop()
menuback.pause()
}
if(mouseX <= width && mouseX >= 750 && mouseY <= 150 && mouseY >= 100&&scene == nummainmenu){
  if(menu.guidecheck){
  menu.guidecheck = false}
  else if(menu.guidecheck == false){
  menu.guidecheck = true}

   
   }
}

function adjust(){
easyscene.arr()
hardscene.arr()
}

