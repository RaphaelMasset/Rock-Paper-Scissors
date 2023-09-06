const element = document.getElementById("b1");

b1.addEventListener("click", RPS);

var compScore = 0;
var yourScore = 0;

function RPS() {
    
    //get the choice from the player
    const selectElement = document.getElementById("choice");
    const selectedValue = selectElement.value;
  

    let rdm = Math.floor(Math.random() * 3);
    
    let computerChoice = ""
    let result = ""

    if (selectedValue == "Rock"){
        if (rdm == 0){
            computerChoice = "Rock"
            result = "it is a draw!"
        }
        else if (rdm == 1){
            computerChoice = "Paper"
            result = "you lose!"
        }
        else if (rdm == 2){
            computerChoice = "Scissors"
            result = "you win!"
        }
    }
    if (selectedValue == "Paper"){
        if (rdm == 0){
            computerChoice = "Rock"
            result = "it is a win!"
        }
        else if (rdm == 1){
            computerChoice = "Paper"
            result = "it is a draw!"
        }
        else if (rdm == 2){
            computerChoice = "Scissors"
            result = "you lose!"
        }
    }
    if (selectedValue == "Scissors"){
        if (rdm == 0){
            computerChoice = "Rock"
            result = "you lose!"
        }
        else if (rdm == 1){
            computerChoice = "Paper"
            result = "you win!"
        }
        else if (rdm == 2){
            computerChoice = "Scissors"
            result = "it is a draw!"
        }
    }

    document.getElementById("result").innerHTML = "The compute chose " + computerChoice + "! " + result ;

    if(result == "you win!"){
        yourScore += 1;
    }
    if(result == "you lose!"){
        compScore += 1;
    }

    document.getElementById("score").innerHTML = "Player score: " + yourScore + " - Computer score: " + compScore ;




}


