var positionX = 0;
function setup(){
		createCanvas(500,500);
		noFill();
}

function draw(){
	background(255);
	ellipse(positionX,height/2, 50, 50);

	if(positionX < width){
		positionX += 3;
	}else{
		positionX = 0;
	}


}
