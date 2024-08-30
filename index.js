const Today=document.getElementById('Today');


// New date using date Constructor
let d =  new Date()

// Convert to string
let dateString = d.toDateString();
Today.innerText=dateString;






















const Hours=document.getElementById('hours');
const MinutesA=document.getElementById('Minutes');
const SecondsA=document.getElementById('Seconds');



function update() {
    const currentTime = new Date();

  
    let d = Math.floor(currentTime.getTime() / 1000 / 60 / 60 / 24);
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

 
    d = d < 10 ? "0" + d : d;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

 
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('Minutes').innerHTML = minutes;
    document.getElementById('Seconds').innerHTML = seconds;
    document.getElementById('AMORPM').innerHTML = ampm;
}

setInterval(update, 1000);

update();





















