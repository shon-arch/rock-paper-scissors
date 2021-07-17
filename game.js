function computerChoice(){

	let choice = Math.floor(Math.random()*3); 

	if(choice == 0)return "rock"; 
	else if(choice == 1)return "paper"; 

	return "scissors"; 
}

function gameResult(playersChoice, computerC){

	if(playersChoice==computerC)return "tie"; 

	if(	(playersChoice=="rock" && computerC =="scissors") ||
		(playersChoice=="paper" && computerC=="rock") ||
		(playersChoice == "scissors" && computerC=="paper")) return "player"; 

	return "computer"; 
}

function game(){
	let playerCount=0,computerCount=0; 
	while(playerCount!=5 || computerCount!=5){

		let playerChoice = prompt("Enter your choic"); 
		let computerC = computerChoice(); 
		let result = gameResult(playersChoice,computerC); 

		if(result=="tie")continue; 
		else if(result =="player")playerCount+=1; 
		else computerCount+=1; 
	}
}