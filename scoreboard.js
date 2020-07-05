// Seungheon Jeon(전승헌)
// Fianl project
// CS099
// Spring 2020

class scoreboard{
constructor(array,array2){
  this.easy = array
  this.hard = array2
this.x = width-300
this.y = height-100
}
  
sort(){
this.easy.sort(function(a,b){return b-a})
this.hard.sort(function(a,b){return b-a})
}
  
draw(){
background(sback)
textSize(50)
if(mode == 'easy'){
for(let i = 1; i < 11; i++){

text(i+' : '+this.easy[i-1],150, i*70+130)

}}
else if(mode == 'hard'){
for(let i = 1; i < 11; i++){

text(i+' : '+this.hard[i-1],150, i*70+130)

}}

}
  
  
  
button(){
 
  fill(255, 200)
  noStroke()
rect(this.x, this.y, 300, 100)

if(mouseIsPressed && mouseX <= width && mouseX >= this.x && mouseY <= height && mouseY >= this.y){scene = nummainmenu}
textSize(50)
stroke('black')
text('Main Menu', this.x+20, this.y+70)
rect(this.x+200,this.y-750, 100, 50)
rect(this.x+200,this.y-700, 100, 50)
  textSize(30)
text('EASY', 760, 40)
text('HARD', 760, 90)
  if(check){
    push()
  stroke('blue')
  text('EASY', 760, 40)
    pop()
  }else{ push()
        stroke('red')
          text('HARD', 760, 90)
        pop()
}}












}