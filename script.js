const startBtn = document.querySelector(".start")
const gameBoard = document.querySelector(".gameBoard")
const box = document.querySelectorAll(".box")
let myBoxes = gameBoard.childNodes
let playing = false;
let playerArray = []

startBtn.addEventListener("click",()=>{
    if(playing == false){
        playing = true;
        for(let i = 0; i<9; i++){
            const div = document.createElement("div")
            div.classList.add("box")
            div.setAttribute("id", i)
            gameBoard.appendChild(div)            
        }
    }
})

function click(){
    myBoxes.forEach(function(box){
        box.addEventListener("click",()=>{
            box.textContent= player1.marker
            playerArray.push(box.id)
        })

    })
}
function Player(name, marker){
    this.name = name,
    this.marker = marker
    return {name, marker}
}

const player1 ={
    name: "player",
    marker: "X",
    play: function(){
        click()
    }
}
const player2={
    name:"computer",
    marker:"Y",
    play:function(){
        let num = Math.floor((Math.random()* 9))
        console.log(num)

    }
}
