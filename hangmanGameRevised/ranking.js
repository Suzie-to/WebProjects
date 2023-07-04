
let ranking = [];
const updatedScore = (playerName, score) => {
    let player = ranking.find((player) => player.name === playerName);
    if (player) {
        player.score = score;
    }
    else {
        ranking.push({name:playerName, score:score});
    }
    ranking.sort((a,b) => b.score - a.score);
}

function displayRanking(){
    console.log("Ranking:\n");
    for(let i = 0; i <ranking.length; i++) {
      console.log(`${i+1}. ${ranking[i].name}: ${ranking[i].score}`);
    }
}