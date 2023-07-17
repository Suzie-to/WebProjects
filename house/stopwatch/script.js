// BUTTONS
const startStopButton = document.querySelector('#startStopButton');
const resetButton = document.querySelector('#resetButton');

// TIME VALUES

let seconds = 0;
let minutes = 0;
let hours = 0;

// LEADING ZERO
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// SET INTERVAL & TIMER STATUS
let timerInterval = null;
let timerStaus = "stopped";


function stopWatch() {
    
    seconds++;

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    if(seconds <10) {
        leadingSeconds = "0" + seconds.toString();
    }
    else {
        leadingSeconds = seconds;
    }
    if(minutes <10) {
        leadingMinutes = "0" + minutes.toString();
    }
    else {
        leadingMinutes = minutes;
    }
    if(hours <10) {
        leadingHours = "0" + hours.toString();
    }
    else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = 
    leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

//START THE TIMER
//window.setInterval(stopWatch, 1000);

startStopButton.addEventListener('click', function() {
    if(timerStaus === "stopped") {
        // start the timer and change the play button into pause 
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopButton').innerHTML = `<i class= "fa-solid fa-pause" id="pause"></i>`;
        timerStaus = "started";
    }
    else {
        // stop the timer
        window.clearInterval(timerInterval);
        //change the pause button back into play button
        document.getElementById('startStopButton').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        //update timer status
        timerStaus = "stopped";
    }
});

resetButton.addEventListener("click", function(){

    // clear the timer seetings
    window.clearInterval(timerInterval);
    //revert all time units to 0
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
});