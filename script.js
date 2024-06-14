let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#newbtn");
let resetbtn = document.querySelector("#resetbtn");
let turnO = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                Showwinner(pos1val);
                return true;
            }
        }
    }
}

const Showwinner = (winner) => {
    msg.innerText = `Congratulations, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
}
const  disabledboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetgame = () => {
    turnO = true;
    msgContainer.classList.add("hide");
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);