const chronometer = document.getElementById('chronometer');
const buttonStartPause = document.getElementById('button-start-pause');
const buttonReStart = document.getElementById('button-restart');

let [hours,minuts,seconds] = [0,0,0];

let timeInterval; 
let chronometerStatus = 'paused';

function updateChronometer() {
    seconds++;
    if(seconds/60 ===1){
        seconds = 0;
        minuts++;
        if(minuts/60 === 1){
            minuts = 0;
            hours++;
        };
    };
    const secondsFormat = format(seconds);
    const minutsFormat = format(minuts);
    const hoursFormat = format(hours);

    chronometer.innerText = `${hoursFormat}:${minutsFormat}:${secondsFormat}`;
};

function format(unitTime){
    return unitTime < 10 ? '0' + unitTime : unitTime;
};

buttonStartPause.addEventListener('click', function(){
    if(chronometerStatus === 'paused' ){
        timeInterval = window.setInterval(updateChronometer,1000);
        buttonStartPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
        buttonStartPause
    } else {

    }
});