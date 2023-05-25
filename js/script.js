const nextDayTimer = new Date("May 26, 2023 09:30:00").getTime();

const timer = setInterval(function(){
    let currentTime = new Date().getTime();
    let remainingTime = nextDayTimer - currentTime;
    
    let days =  Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    document.getElementById("days").innerHTML = days;

    let hours = Math.floor(remainingTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.getElementById("hours").innerHTML = hours;

    let minutes = Math.floor(remainingTime % (1000 * 60 * 60) / (1000 * 60));
    document.getElementById("minutes").innerHTML = minutes;

    let seconds = Math.floor(remainingTime % (1000 * 60) / 1000);
    document.getElementById("seconds").innerHTML = seconds;

    if(remainingTime < 0){
        clearInterval(timer);
        console.log("over");
    }
}, 1000);
