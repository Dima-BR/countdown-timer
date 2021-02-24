let daysEl    = document.getElementById("days");
let hoursEl   = document.getElementById("hours");
let minEl     = document.getElementById("min");
let secondsEl = document.getElementById("seconds");

// set a valid end date 
const deadline = '20 Nov 2021';

function countdown(){
    const cdDate= new Date(deadline);
    const currentDate = new Date();

    const totalSeconds =(cdDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let second = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML=formatTime(hours);
    minEl.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(second);
}

function formatTime(time){
    return time <10 ? `0${time}`:time;
}


// initial call
countdown();

setInterval(countdown, 1000);
