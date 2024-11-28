const myArray = [1,2,3,4,5,6,7,8,9]
let playerArr = []
let computerArr = []
const winningArrays = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let player1 = {
    name: "player 1",
    marker: "X",
}
let player2 = {
    name: "player 2",
    marker: "O",
}
const gameBoard = document.querySelector(".gameBoard")
const box = gameBoard.childNodes
let playing = false 
const game = (function(){
    let gameboard = [0,1,2,3,4,5,6,7,8]
    const start = document.querySelector(".start")
    start.addEventListener("click",()=>{
        if(playing=== false){
            playing= true
            gameboard.forEach(element=>{
                let box = document.createElement("div")
                box.classList.add('box')
                box.setAttribute("id", gameboard[element])
                gameBoard.appendChild(box)
                box.addEventListener("click",()=>{
                    box.textContent= player1.marker
                    playerArr.push(box.id)
                    console.log(playerArr)
                    computer()
                    checkScore()
                })  
            })
        }
    })   

})()

function checkScore(){
    winningArrays.forEach((arr)=>{
        if(playerArr.toString()===arr.toString()){
            console.log("player wins")
        }
        if(computerArr.toString()===arr.toString()){
            console.log("computer wins")
        }
    })
}
function randomNum(){
    let num = Math.floor(Math.random()*9)
    return num
}


function computer(){
    let num = randomNum()
    box[num].textContent ==""
    computerArr.push(num)
    box[num].textContent = player2.marker
}