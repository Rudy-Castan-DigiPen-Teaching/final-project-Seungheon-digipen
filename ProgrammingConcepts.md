1. Shapes
#### I think some things will be used as images instead of drawing them using draw. It will be used to make the shape of the button used within the game.\n
```
rect(x, y, 200, 100)
```
2. Colors
#### Colors will basically be used to color the background, objects, etc. And the first arrow to reach in my game will turn red.
```
background(color1)
fill('red')
arrow
googly eye
```
3. Variables
#### Variables will be used for the number, score, arrow, arrow speed, mouse position, etc. of each screen.
```
let userX;
let userY;
let score = 0
let meX = 200
distance = meX - arrowX
heart = 3
```
4. Conditional States
#### Use the if() door to allow users to go to the desired screen by pressing a button. Also, when the main character is hit by an arrow, the number of hearts drops. It will be used in many other situations.
```
if(distance == 0){heart -= 1}

switch button{
case 1:
scene = 1
break;
case 2:
scene = 2
break;
etc
}
}
```
5. Loops
#### I will make arrows using For loop etc. and control the speed of arrows.
```
numm = []
while(heart > 0){
x += 1
num = floor(random(5)) // 5 direction
numm.push(num)
new arrow(numm[x], arrowspeed, etc)
}

for(let i = 1; i < 1000; i += 0.1){
arrowspeed += i
}
```
6. Functions
#### We will use various functions such as mouseClick(), keyPressed(), setInterval(), and functions within the class so that users can enjoy the game.
```
function mouseClick(){
if(userX <= button1xM, userX >= button1xm, userY <= button1yM, userY >= button1ym){
button = 1
}
etc
}

function keyPressed(){
if(keyCode == 37){
bgvolume -= 10
}else if(keyCode == 39){
bgvolume += 10
}
}
```
7. Classes
#### I will create and use several classes, such as arrow class, main menu class, button class, etc.
```
class arrow{
constructor(num, arrowspeed){
this.x = 100 + num * 300
this.y = 100
this.num = num
this.arrowspeed = arrowspeed
}
update(){
if(num == 1){this.y += 300)
else if(num == 2){this.y += 600)
else if(num == 3){this.y += 300)
}

}
draw(){
if(num == 2){
image(arrow, this.x-arrwspeed, this.y, 100, 100)}
}
etc
}

```
8. Arrays
#### I will use Arrays to store records on the scoreboard.
```
scoreboard = []
if(heart == 0){
scoreboard.push(score)
}
```
