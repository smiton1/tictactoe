let gameboard = [0,1,2,3,4,5,6,7,8]

const game = (function(){
    let playing = false 
    let div = document.querySelectorAll(".box")
    const gameBoard = document.querySelector(".gameBoard")
    const start = document.querySelector(".start")
    start.addEventListener("click",()=>{
        console.log("clicked")
        if(playing === false){
            gameboard.forEach(element => {
                const div = document.createElement("div")
                div.setAttribute("id", gameboard[element])
                div.classList.add("box")
                div.addEventListener("click",()=>{
                    div.textContent = player1.marker
                    player2.play()
                })
                gameBoard.append(div)
                playing = true
            });
        }
    })
    let player1 = {
        name: "player 1",
        marker: "X",

    }
    let player2 = {
        name: "player 2",
        marker: "O",
        play(){
            let cpu = Math.floor((Math.random() * gameboard.length)+1)
            let targetDiv = document.getElementById(cpu)
            gameboard.forEach(element=>{
                if(targetDiv.innerHTML != ""){
                    let cpu = Math.floor((Math.random() * gameboard.length)+1)
                    let targetDiv = document.getElementById(cpu)
                }else{
                    targetDiv.textContent= player2.marker
                }
            })
        }
    }

    console.log(player1.name, player1.marker)


})()