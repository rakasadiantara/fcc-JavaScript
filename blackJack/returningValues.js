let player1Time =102;
let player2Time = 129;

function getFastestRaceTime() {
    if (player1Time<player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    } 
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)


// exercise
function totalRaceTIme(){
    return player1Time + player2Time;
}

let totalTime = totalRaceTIme()
console.log(totalTime)