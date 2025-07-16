let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#RGame");
let msgbox = document.querySelector(".msg-container");
let msgwinner = document.querySelector("#winner");
let newGame = document.querySelector("#sGame");


let turnO = true;   //playerX / player0
let count = 0; //To Track Draw

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetBtn = () => {
    turnO = true;
    count = 0;
    enableBoxes();
     msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
           box.innerText = "O";
           turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
         box.disabled = true;

    count++;



    let isWinner = checkWinner();
     if (count === 9 && !isWinner) {

      gameDraw();

    }
    });
});


const gameDraw = () => {

  msg.innerText = `Game was a Draw.`;

  msgContainer.classList.remove("hide");

  disableBoxes();

};

const disableBoxes = () => {
        for(let box of boxes){
            box.disabled = true;
        };
};

const enableBoxes = () => {
     for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        };
};

const showWinner = (winner) => {
        msgwinner.innerText = `Congratulation You are Winner ${winner}`;
        msgbox.classList.remove("hide");
       disableBoxes();
}
const checkWinner = () => {
    for(patterns of winPatterns){
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != "" ){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner");
            showWinner(pos1);
        }
      }
    }
}

newGame.addEventListener("click", resetBtn);
resetGame.addEventListener("click", resetBtn);