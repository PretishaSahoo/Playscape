console.log("Welcome to Tic Tac Toe!");
let turnMusic= new Audio("cross.mp3");
let winsong= new Audio("winsong.mp3");

let turn="X";
let gameOver=false;
let boxtext=document.getElementsByClassName('boxtext');

//function to change turn
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}

//function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[0]].innerText)  &&  (boxtext[e[0]].innerText!=="")){
            document.querySelector('.turn').innerText= boxtext[e[0]].innerText +" Won ";
            gameOver=true;
            winsong.play();
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="200px";
        }

    });

};

//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnMusic.play();
            checkWin();
        }
        if(!gameOver){
            document.getElementsByClassName("turn")[0].innerText=" Turn for  " +turn;
        }
        
        
    });
});

//add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText='';
    })
    turn="X";
    gameOver=false;
    if(!gameOver){
        document.getElementsByClassName("turn")[0].innerText=" Turn for  " +turn;
    }
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="0px";
})

