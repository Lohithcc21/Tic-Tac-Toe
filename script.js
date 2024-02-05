let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");

let turnO = true; //player X, player Y
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],                    //Posibilities  of winning in the game board   --(1)
    [2,4,6],
    [2,5,8],
    [3,4,5],                   
    [6,7,8]
];

const resetGame = () => {                          //Reset Game  Functionality   (6)
    turnO = true;
    enableBoxes();                                 // new game 5-Call
     msgContainer.classList.add("hide");
}

boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        if(turnO) {
            box.innerText="O";
            box.style.color = "Purple";                // Making Which box to print the value (2)
            turnO = false;                              
        } else {
            box.innerText="X";
            box.style.color = "Blue";
            turnO = true;
        }
        box.disabled = true;                         //once clicked again  it will be disabled  (4 - call) 

        checkWinner();                               //Check Winner  after clicking on a Box (3)
    });
});


const disableBoxes = () => {
    for(let box of boxes) {                           //once Winner announced  all the boxes are disabled (4-Method)
        box.disabled = true;

    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;                                //When  click on new game button ,all the boxes will become enabled (5 - MEthod)
       box.innerText = "";
    }
}

const showWinner = (Winner) => {                              //here it will show Winner
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
            let post1Val =  boxes[pattern[0]].innerText;
            let post2Val =  boxes[pattern[1]].innerText;
            let post3Val =  boxes[pattern[2]].innerText;                  //(3 - Method)

            if(post1Val !="" && post2Val !="" && post3Val !="") {
                if(post1Val === post2Val && post2Val === post3Val) {    //Here this method will  compare each element in array with other elements and see whether they have same values or not and tell the winner
                    showWinner(post1Val);  
                }
            }
    }
};


newGamebtn.addEventListener("click", resetGame);    //Pressing on NewGame Button  -> Reset Game Function Will Run
resetBtn.addEventListener("click",resetGame);      // Same here also Pressing on ResetButton will Begain  a New Game