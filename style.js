console.log("Welcome to TIC TAC TOE");
let music= new Audio("ting.mp3");//initializing tha audio to be used
let gameover= new Audio("gameover.mp3");//initializing the game over sound 
let turn = "X";//will changing the turn accordingly
let isgameover= false;
//change the turn function
function changeTurn() {
    return turn==="X"?"0":"X";//changing function
}
const checkwin= ()=> {
    let boxtext= document.getElementsByClassName("boxtext");
    let wins= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    //checking for each and every turn whether it is equal or not
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText+" Won.";
            isgameover= true;
            gameover.play();//if equal do nothing and play sound 
            //image box ko select krke uske andr ka img tag ko select kia particularly
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="156px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}
//function to check if won or not
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn= changeTurn();
            music.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = `Turn for= `+turn;
        }
    }
    })
})
//if reset button is clicked
reset.addEventListener("click", ()=>{
    //returning all the boxes
    let boxtexts= document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn ="X"; 
    isgameover= false;
    document.getElementsByClassName("info")[0].innerText = `Turn for= `+turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0";
    document.querySelector(".line").style.width = "0px";
})



