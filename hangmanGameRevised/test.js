// const readlineSync = require('readline-sync');
// //TODO cap topPlayersScore to 5 or ten
// let topPlayers = 5;
// let ranking = [];
// // let getPlayerName = () => {
// //     let currentPlayer = readlineSync.question("Enter your name: ");
// //     let ranking = [];
// //     ranking.push({name:currentPlayer, score:0});
// //     //return ranking;
// // }
// // getPlayerName();

// // let updateScore = (playerName, score) => {
// //     for  (let i = 0; i <= ranking.length; i++) {
// //         if (ranking[i].name === playerName) {
// //             ranking[i].score = score;
// //             break;
// //         }
// //     }
// //     ranking.sort(function (a,b) {
// //         return a.score -b.score;
// //     });
// // }


// // updateScore("Player 1", 10);
// // updateScore("Player 2", 5);
// // updateScore("Player 3", 15);
// // console.log(ranking);

// // create the player object
// let playerName = readlineSync.question("Enter your name: ");
// let playerScore = 0;
// // the original score + gueeses

// let player = {
//     name: playerName,
//     score:playerScore
// };
// // add the player to the ranking
// ranking.push(player);

// //update the player score
// let updatedPlayer = ranking.find(function (player) {
//     return player.name === playerName;
// });

// // check if player exists before updating the score
// if (updatedPlayer) {
//     updatedPlayer.score = updatedScore;
// }
// //sort the ranking list in Descending order
// ranking.sort(function (a,b) {
//     return b.score - a.score;
// });

//TODO display the ranking with the number they place in