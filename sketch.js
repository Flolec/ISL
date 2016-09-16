var size = 0;
function setup(){
		createCanvas(500,500);
		noFill();
}

function draw(){

	ellipse(width/2,height/2,size, size);

	if(size < 500){
		size+=7;
	}else{
		size = 0;
		background("#FFFFFF");
	}

}
