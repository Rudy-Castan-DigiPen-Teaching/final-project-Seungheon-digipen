// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020

class arrow{
constructor(speed){
  this.num = floor(random(4))
this.arrowx = 0
this.arrowspeed = speed

}

move(){
this.arrowx -= this.arrowspeed

}

cho(){
  switch(this.num){
    case 0:
  push()
      translate(40, 430)
      rotate(PI)
      image(ar, this.arrowx,0, 50, 10)
  pop()
      break;
    case 1:
  push()
      translate(420, 40)
      rotate(PI*3/2)
      image(ar, this.arrowx,0, 50, 10)
  pop()
      break;
    case 2:
  push()
      translate(810, 420)
      image(ar, this.arrowx,0, 50, 10)
  pop()
      break;
    case 3:
  push()
      translate(430, 810)
      rotate(PI*1/2)
      image(ar, this.arrowx,0, 50, 10)
  pop()
      break;

  
  }
}














}