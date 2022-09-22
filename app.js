// Variable for btn
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.querySelector(".timer");

// Variables for the timer
let seconds = 0;
let minutes = 0;
let hours = 0;
let fSecZero = 0;
let fMinsZero = 0;
let fHrsZero = 0;

// Variables for set interval and timerstatus
let timerInterval = null;
let timerStatus = "stopped";

function watch() {

    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }

    if (minutes / 60 === 1) {
        
        minutes = 0;
        hours++; 
    }

    if (hours / 24 === 1) {
        hours = 0;
        stopBtn();
    }

    if (seconds < 10) {
        fSecZero = "0" + seconds.toString();
    } else {
        fSecZero = seconds;
    }
    if (minutes < 10) {
        fMinsZero = "0" + minutes.toString();
    } else {
        fMinsZero = minutes;
    }
    if (hours < 10) {
        fHrsZero = "0" + hours.toString();
    } else {
        fHrsZero = hours;
    }


    timer.innerText = fHrsZero + ":" + fMinsZero + ":" + fSecZero;
}

function stopBtn() {
     window.clearInterval(timerInterval);
     timerStatus = "stopped";
};


start.addEventListener("click", function() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(watch, 1000);
        timerStatus = "started";
    }
});

stop.addEventListener("click", stopBtn);

reset.addEventListener("click", function () {
    
     window.clearInterval(timerInterval);
     seconds = 0;
     minutes = 0;
     hours = 0;

     stopBtn();

     document.querySelector(".timer").innerHTML = "00<small>H</small>:00<small>M</small>:00<small>S</small>";
}); 