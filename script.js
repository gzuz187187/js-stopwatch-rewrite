let hoursHtml = document.getElementById("hours");
let minutesHtml = document.getElementById("minutes");
let secondsHtml = document.getElementById("seconds");
let milliHtml = document.getElementById("milliseconds");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");
let int = null;
let hh = 0;
let mm = 0;
let ss = 0;
let ms = 0;

let startTimer = () => {
    if (int != null) {
        clearInterval(int);
    }

    int = setInterval(() => {
        calculateTime();
        displayTime(hh, mm, ss, ms);
    }, 10);
}

let stopTimer = () => {
    clearInterval(int);
}

let resetTimer = () => {
    displayTime(0, 0, 0, 0);
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;
}

let displayTime = (hours, minutes, seconds, milliseconds) => {
    hoursHtml.innerHTML = format2digits(hours);
    minutesHtml.innerHTML = format2digits(minutes);
    secondsHtml.innerHTML = format2digits(seconds);
    milliHtml.innerHTML = format3digits(milliseconds);
}

let calculateTime = () => {
    ms += 10;

    if (ms == 1000) {
        ss++;
        ms = 0;
    }

    if (ss == 60) {
        mm++;
        ss = 0;
    }

    if (mm == 60) {
        hh++;
        mm = 0;
    }
}

let format2digits = (n) => {
    let temp = String(n);

    if (temp.length == 1) {
        return `0${temp}`;
    }

    return temp;
}

let format3digits = (n) => {
    let temp = String(n);

    if (temp.length == 1) {
        return `00${temp}`;
    }

    if (temp.length == 2) {
        return `0${temp}`;
    }

    return temp;
}

// add event listeners
startBtn.addEventListener("click", () => {
    startTimer();
});

stopBtn.addEventListener("click", () => {
    stopTimer();
});

resetBtn.addEventListener("click", () => {
    resetTimer();
});