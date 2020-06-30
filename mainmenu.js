// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020

class main{
constructor(){
this.x = width/2-150
this.y = height/2

}
  
  
draw(){
background(mmback)
}
  
  
button(){
  fill(255, 200)
  noStroke()
rect(this.x, this.y-200, 300, 100)
rect(this.x, this.y, 300, 100)
rect(this.x, this.y+200, 300, 100)
  if(mouseIsPressed && mouseX <= this.x + 300 && mouseX >= this.x && mouseY <= this.y-200+100 && mouseY >= this.y-200){scene = numplay}
  else if(mouseIsPressed && mouseX <= this.x + 300 && mouseX >= this.x && mouseY <= this.y+100 && mouseY >= this.y){scene = numscoreboard}
  else if(mouseIsPressed && mouseX <= this.x + 300 && mouseX >= this.x && mouseY <= this.y+200+100 && mouseY >= this.y+200){scene = numoption}
  textSize(30)
  stroke('black')
  text('PLAY', this.x+110, this.y-140)
  text('SCOREBOARD', this.x+60, this.y+60)
  text('OPTION', this.x+100, this.y+260)

}






}