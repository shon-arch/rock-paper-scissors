const button = document.querySelectorAll("button"); 
// console.log("hello world"); 
button.forEach((x)=>{
	x.addEventListener("click",(e)=>{
		game(e.target.alt); 
	})
})


let playerCount=0,computerCount=0; 

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

function game(playersChoice){
		let computerC = computerChoice(); 
		let result = gameResult(playersChoice,computerC); 
		if(result=="tie"){
			document.querySelector(".result").textContent = "TIE"; 	
		} 
		else if(result =="player"){
			document.querySelector(".result").textContent = "You Won"; 
			playerCount+=1; }
		else{ 
			document.querySelector(".result").textContent = "You Lost"; 			
			computerCount+=1; 
		}
		document.querySelector(".player-score").textContent = "Player : "+playerCount; 
		document.querySelector(".computer-score").textContent = "Computer : "+computerCount; 
		document.querySelector(".cc").textContent = "Computer choice : " +computerC;

	}