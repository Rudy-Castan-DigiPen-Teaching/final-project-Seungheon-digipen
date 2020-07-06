// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020
class hard{
constructor(){
this.heart = 3
this.numscore = 0
this.numarr = []
this.num =1
this.dir=0
this.alive = true
this.x = width-300
this.y = height-100
this.high = ['','','','','','','','','','']
this.check = false
}
  
  
  
arr(){
if(this.check&&this.numscore<=100){
this.numarr.push(new arrow(10))
}
else if(this.check&&this.numscore>100&&this.numscore<=200){
this.numarr.push(new arrow(1))
}
else if(this.check&&this.numscore>218){
this.numarr.push(new arrow(15))
}
}



go(){
if(this.numarr.length >=1){
for(let b of this.numarr){
b.cho()
  b.move()
}
let adist = this.numarr[0].arrowx + 370
if(adist <= 3){this.numarr.shift()
this.heart--
if(this.alive){hit.play()}}
}}

draw(){
if(mode == 'easy'){
background(eback)}
else if(mode == 'hard'){
background(hback)}
  
if(this.numscore>100&&this.numscore<=105){
textSize(30)
text('GREAT!', width/2-50, height/2-100)
}
  else if(this.numscore>200&&this.numscore<=220){
textSize(30)
text('WOW!', width/2-50, height/2-100)
}
} 
  
shape(){
if(this.heart>=3){image(heart, 700, 0, 50,50)}
if(this.heart>=2){image(heart, 750, 0,50,50)}
if(this.heart>=1){image(heart, 800, 0,50,50)}
} 

score(){
rect(0, 0, 200, 50)
  textSize(30)
text('score : ', 30, 30)
text(this.numscore, 150, 35)
}
  
shield(){

if(keyIsDown(LEFT_ARROW)){
 this.dir = 0
} else if(keyIsDown(UP_ARROW)){
 this.dir = 1
} else if(keyIsDown(RIGHT_ARROW)){
 this.dir = 2
} else if(keyIsDown(DOWN_ARROW)){
 this.dir = 3
}     
switch(this.dir){
  case 0:
  image(she, width/2-40, 410, 10, 30)  
  break
  case 1:
  image(she, width/2-15, 390, 30, 10)
  break
  case 2:
  image(she, width/2+30, 410, 10, 30)
  break
  case 3:
  image(she, width/2-15, 450, 30, 10)
  break

}
if(this.numarr.length >=1){
let bdist = this.numarr[0].arrowx + 370
if(this.numarr[0].num==this.dir && bdist>3 && bdist <= 20)
{this.numarr.shift()
this.numscore+=this.num
if(this.alive){guard.play()}}
}}

over(){
if(this.heart <= 0){
  fill(220, 200)
rect(0,0,850,850)
  stroke('black')
textSize(50)
  text('Game Over', width/2-130, height/2)
this.alive = false
this.num = 0
over.play()
over.pause()

  
if(this.alive==false){
 push()
  fill(255, 200)
  noStroke()
rect(this.x, this.y, 300, 100)
if(mouseIsPressed && mouseX <= width && mouseX >= this.x && mouseY <= height && mouseY >= this.y){scene = nummainmenu
 this.high.push(this.numscore)
menuback.play()
}
textSize(50)
stroke('black')
text('Main Menu', this.x+20, this.y+70)
  pop()
}

playback.pause()
}
}
 
  
reset(){
if(this.alive == false && scene == 0 && mode == 'hard'){
this.heart = 3
this.numscore = 0
this.numarr = []
this.num =1
this.dir=0
this.alive = true
this.speed = 10

}
}

  


}