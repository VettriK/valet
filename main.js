//Create a reference for canvas 
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
//Give specific height and width to the car image
var carWidth=75
var carHeight=150
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carX=50
carY=400
function add() {
	background_imagetag=new Image()
    background_imagetag.onload=uploadBackground
    background_imagetag.src=background_image
    
    rover_imagetag=new Image()
    rover_imagetag.onload=uploadgreencar
    rover_imagetag.src=greencar_image

}

function uploadBackground() {
	ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height)
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(rover_imagetag,carX,carY,carWidth,carHeight)
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if (carY>=0){
        carY=carY-10
        uploadBackground()
        uploadgreencar()
    }
	//Define function to move the car upward
}

function down()
{
	if (carY<=500){
		carY=carY+10
		uploadBackground()
		uploadgreencar()
		}
	//Define function to move the car downward
}

function left()
{
    if (carX>=0){
		carX=carX-10
		uploadBackground()
		uploadgreencar()
		}
	//Define function to move the car left side
}

function right()
{
    if (carX<=700){
		carX=carX+10
		uploadBackground()
		uploadgreencar()
		}
	
	//Define function to move the car right side
}
