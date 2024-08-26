let userScore=0
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usermark=document.querySelector("#user-score");
const compMark=document.querySelector("#comp-score");


const genComputerChoice=()=>{
    //rock,paper,scissors generate randomly
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};


const drawGame=()=>{
    msg.innerText="Game Draw! Play Again";
    msg.style.backgroundColor="#081b31";
};

const playGame=(userChoice)=>{
    const computerChoice=genComputerChoice();   
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=computerChoice==='paper'? false:true;
        }
        else if(userChoice==='paper'){
            userwin=computerChoice==='scissors'?false:true;
        }
        else{
            userwin=computerChoice==='rock'?false:true;
        }
        showWinner(userwin,userChoice,computerChoice);
    }
};

const showWinner=(userwin,userChoice,computerChoice)=>{
    if(userwin){
        userScore++;
        usermark.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compMark.innerText=compScore;
        msg.innerText=`You lose. ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});