// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020

class main{
constructor(){
this.x = width/2-150
this.y = height/2
this.guidecheck = false
}
  
  
draw(){
background(mmback)
}
  
  
button(){
  fill(255, 200)
  push()
  noStroke()
rect(this.x, this.y-200, 300, 100)
rect(this.x, this.y, 300, 100)
rect(this.x, this.y+200, 300, 100)
pop()
rect(this.x+475,this.y-425, 100, 50)
rect(this.x+475,this.y-375, 100, 50)
rect(this.x+475,this.y-325, 100, 50)
  if(mouseIsPressed && mouseX <= this.x + 300 && mouseX >= this.x && mouseY <= this.y-200+100 && mouseY >= this.y-200 &&mode =='easy'){scene = numeasy}
  else if(mouseIsPressed && mouseX <= this.x + 300 && mouseX >= this.x && mouseY <= this.y-200+100 && mouseY >= this.y-200 &&mode =='hard'){scene = numhard}
  else if(mouseIsPressed && mouseX <= this.x + 300 && mouseX >= this.x && mouseY <= this.y+100 && mouseY >= this.y){scene = numscoreboard}
  else if(mouseIsPressed && mouseX <= this.x + 300 && mouseX >= this.x && mouseY <= this.y+200+100 && mouseY >= this.y+200){scene = numoption}
  
  textSize(30)
  push()
  fill('red')
  stroke('red')
  text('PLAY', this.x+110, this.y-140)
  text('SCOREBOARD', this.x+60, this.y+60)
  text('OPTION', this.x+100, this.y+260)
  pop()
  text('EASY', 760, 40)
  text('HARD', 760, 90)
  push()
  fill('yellow')
  text('GUIDE',760, 140)
  pop()
  if(check){
    push()
  stroke('blue')
  text('EASY', 760, 40)
    pop()
  }else{ push()
        stroke('red')
          text('HARD', 760, 90)
        pop()}

}
  
guide(){
  textSize(20)
  stroke('black')
  if(this.guidecheck){
    push()
    fill('white')
  beginShape()
  vertex(760, 150)
  vertex(760, 180)
  vertex(850, 180)
  vertex(850, 380)
  vertex(650, 380)
  vertex(650, 180)
  vertex(740, 180)
  endShape(CLOSE)
  pop()
    fill('black')
text('Use the arrow keys \nto control the shield\nto block\nthe flying arrow.\nAs soon as the game starts,\nthe arrow will fly,\nso be careful!',650, 200)
}}





}