
let player = {
    name: "player",
    marker: "X",
    arr: []
}
let computer= {
    name:"CPU",
    marker:"O",
    arr:[]
}
let boxes = [0,1,2,3,4,5,6,7,8]

function randomNumber(){
    return Math.floor(Math.random()*9)
}
function check(){
    let index = randomNumber()
    while(typeof boxes[index] !== "number"){
        console.log("running again")
        index=randomNumber()
    }
    boxes[index] = computer.marker
    computer.arr.push(index)
    console.log(boxes)
}
function playerPick(){
    let pick = prompt("pick a number between 0-8")
    if(isNaN(boxes[pick])){
        pick = prompt("already selected, try again")
    }
    boxes[pick] = player.marker
    player.arr.push(pick)
    console.log(boxes)
}
// playerPick()
// check()
// playerPick()
// check()
// playerPick()
// check()
// playerPick()
// check()
// playerPick()

function checkWin(){
    if(player.arr.includes("0") && player.arr.includes("1") && player.arr.includes("2")){
        console.log("player wins")
    }
}
checkWin()

function play(arr){
    let gameRunning = true
    function gameLoop(){
        let allStrings = true
        if(gameRunning){          
            for(let i = 0; i < 80; i++){
                if(typeof arr[i] === "number"){
                    playerPick()
                    check()
                    allStrings = false
                    break
                }
            }
        }
        if(allStrings){
            gameRunning= false
        }
        else{
            console.log("atleast one number")
            setTimeout(gameLoop, 1000)
        }
    }
    gameLoop()
}
play(boxes)