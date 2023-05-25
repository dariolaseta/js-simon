const nextDayTimer = new Date("May 26, 2023 09:30:00").getTime();
let currentTime = new Date().getTime();
let remainingTime = nextDayTimer - currentTime;

const timer = setInterval(function(){
    
    let days =  Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    document.getElementById("days").innerHTML = days;

    let hours = Math.floor(remainingTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.getElementById("hours").innerHTML = hours;

}, 100);
