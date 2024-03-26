let userscoree = 0;
let computerscoree = 0;

let choices = document.querySelectorAll(".choice");
let winnerdecide = document.querySelector("#winshow");
let pointuser = document.querySelector("#userscorem");
let pointcomp = document.querySelector("#computerscorem");


const compCalculator = () => {
    const arr = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*3);
    return arr[random];
}
const draw = () =>{
    console.log("draw");
    winnerdecide.innerText = "DRAW GAME BETWEEN YOU AND YOUR COMPUTER";
 }
 const winnerf= (userM) => {
    if(userM){
        userscoree++;
        pointuser.innerText = userscoree;
        winnerdecide.style.backgroundColor = "Green";
        winnerdecide.innerText = "YOU WIN";
    }
    else{
        computerscoree++;
        pointcomp.innerText = computerscoree;
        winnerdecide.style.backgroundColor = "red";
        winnerdecide.innerText = "YOU LOSE";
    }
 }

const mainGame = (choiceuser) =>{
    console.log("you = ",choiceuser);
    let computerrandom = compCalculator();
    console.log("compute = ",computerrandom);
   
    if(computerrandom===choiceuser){
        draw();
        
    }else{
        let userM = true;
    
    if(computerrandom=="paper" && choiceuser=="scissors"){
        userM = true;
  }
    else if(computerrandom=="scissors" && choiceuser=="paper"){
       userM = false;
    }
    
    else if(computerrandom=="rock" && choiceuser=="paper"){
        userM = true;
    }
    else if(computerrandom=="paper" && choiceuser=="rock"){
        userM = false;
    }
    else if(computerrandom=="rock" && choiceuser=="scissors"){
        userM = false;
    }
    else{
        userM = true;
    }
    winnerf(userM);
}
}


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        let choiceuser = choice.getAttribute("id");
       mainGame(choiceuser);
       
    })
})