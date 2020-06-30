// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020
class play{
constructor(){
this.heart = 3
this.numscore = 0
this.speed=1
this.numarr = []
this.num =1
this.dir=0
this.su=1
this.alive = true

}
  
arr(){
this.numarr.push(new arrow(this.speed))
// this.speed+=this.su

}
  
go(){

for(let p of this.numarr){
p.cho()
p.move()}
  
let adist = dist(this.numarr[0].arrowx, 0, -370, 0)
if(adist <= 3){this.numarr.shift(),this.heart--}

}

  
draw(){
background(pback)
} 
  
shape(){
image(cir, width/2-25, 400, 50, 50)
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
let bdist = dist(this.numarr[0].arrowx, 0, -370, 0)
if(this.numarr[0].num==this.dir && bdist>=3 && bdist <= 20){this.numarr.shift(),this.numscore+=this.num}
}

over(){
if(this.heart <= 0){
  fill(220, 200)
rect(0,0,850,850)
  stroke('black')
textSize(50)
  text('Game Over', width/2-130, height/2)
this.alive = false
this.num = 0
}
}

  

}