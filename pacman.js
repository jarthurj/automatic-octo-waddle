var world = [
	[2,2,2,2,2,2,2,2,2,2],
	[2,3,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,2,2,2,2,2,2,2,2,2]
];

var pacmanPos = [1,1];
function displayWorld(){
	var output = '';
	for(var x=0;x<world.length;x++){
		output += "<div class='row"+x+"'>";
		for(var y=0;y<world[x].length;y++){
			if(world[x][y]==1){
				output += "<div class='coin'></div>";
			}
			else if(world[x][y]==2){
				output += "<div class='brick'></div>";
			}
			else if(world[x][y]==3){
				output += "<div class='pacman'></div>";
			}
		}
		output += "</div>";
	}
	console.log(output);
	document.getElementById('world').innerHTML = output;
}

displayWorld();

function movePacmanCoin(){
	var rowToGet = ".row"+pacmanPos[0];
	var colToGet = " div:nth-child("+pacmanPos[1]+")";
	var cellToGet = rowToGet+colToGet;
	var pacmanElement = document.getElementsByClassName("pacman");
	pacmanElement[0].classList.add("blank");
	pacmanElement[0].classList.remove("pacman");

	var cellElement = document.querySelector(cellToGet);
	console.log(cellElement);
	cellElement[0].classList.add("pacman");
	cellElement[1].classList.remove("coin");
};

function movePacmanBlank(){

}
document.onkeydown = function(e){
	console.log(e);
	var currentSpace = world[pacmanPos[0],pacmanPos[1]];
	if(e.keyCode=="37"){//left
		if(world[pacmanPos[0]-1,pacmanPos[1]]!=2){
			pacmanPos[1] -= 1;
			if(currentSpace == 1){
				movePacmanCoin();
			}
			else if(){
				movePacmanBlank();
			}
		}
	}
	else if(e.keyCode=="38"){//up
		if(world[pacmanPos[0],pacmanPos[1]+1]!=2){
			
			pacmanPos[0] -= 1;
			
		}
	}
	else if(e.keyCode=="39"){//right
		if(world[pacmanPos[0]+1,pacmanPos[1]]!=2){
			pacmanPos[1] += 1;
			movePacman();
		}
	}
	else if(e.keyCode=="40"){//down
		if(world[pacmanPos[0],pacmanPos[1]-1]!=2){
			pacmanPos[0] += 1;
			movePacman();
		}
	}
};