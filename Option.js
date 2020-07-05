// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020

class option{
constructor(){
this.x = width-300
this.y = height-100
  this.sfxad = 2
  this.backad = 2
  this.state = true
}
  
draw(){
background(oback)
push()
textSize(50)
  strokeWeight(5)
  push()
  textSize(20)
  text('Adjust by Arrow Key',width/2-200, height/2)
  pop()
  text('Backgound', 200, 250)
  line(200, 300, 700, 300)
  text('SFX', 200, 550)

  line(200, 600, 700, 600)
if(this.state){
    strokeWeight(5)
switch(this.backad){
  case 1:
    playback.setVolume(0)
    menuback.setVolume(0)
    easyback.setVolume(0)
    line(200,325,200, 275)
    break;
  case 2:
    playback.setVolume(0.25)
    menuback.setVolume(0.25)
    easyback.setVolume(0.25)
    line(325,325,325, 275)
    break;
  case 3:
    playback.setVolume(0.5)
    menuback.setVolume(0.5)
    easyback.setVolume(0.5)
    line(450,325,450, 275)
    break;
  case 4:
    playback.setVolume(0.75)
    menuback.setVolume(0.75)
    easyback.setVolume(0.75)
    line(575,325,575, 275)
    break;
  case 5:
    playback.setVolume(1)
    menuback.setVolume(1)
    easyback.setVolume(1)
    line(700,325,700, 275)
    break;
}  
}
if(this. state == false){
    strokeWeight(5)
switch(this.sfxad){
  case 1:
    hit.setVolume(0)
    guard.setVolume(0)
    over.setVolume(0)
    line(200,625,200, 575)
    break;
  case 2:
    hit.setVolume(0.25)
    guard.setVolume(0.25)
    over.setVolume(0.25)
    line(325,625,325, 575)
    break;
  case 3:
    hit.setVolume(0.5)
    guard.setVolume(0.5)
    over.setVolume(0.5)
    line(450,625,450, 575)
    break;
  case 4:
    hit.setVolume(0.75)
    guard.setVolume(0.75)
    over.setVolume(0.75)
    line(575,625,575, 575)
    break;
  case 5:
    hit.setVolume(1)
    guard.setVolume(1)
    over.setVolume(1)
    line(700,625,700, 575)
    break;
 
}
}
pop()
}

button(){
 
  fill(255, 200)
  noStroke()
rect(this.x, this.y, 300, 100)

if(mouseIsPressed && mouseX <= width && mouseX >= this.x && mouseY <= height && mouseY >= this.y){scene = nummainmenu}
textSize(50)
stroke('black')
text('Main Menu', this.x+20, this.y+70)

}














}