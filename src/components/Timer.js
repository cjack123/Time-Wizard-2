import React from "react"

export const Timer = () => {

    var minutes = "00";
    var seconds = "00";

    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");

    var buttonStart = document.getElementById("button-start");
    var buttonPause = document.getElementById("button-pause");
    var buttonReset = document.getElementById("button-reset");
    var interval;

    function startTimer () {
        minutes++;

        if (minutes < 9) {
            appendMinutes.innerHTML = "0" + minutes;
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
        if (minutes > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            minutes = 0;
            appendMinutes.innerHTML = "0" + 0
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }

    buttonStart.addEventListener('click' = () => {
        interval = setInterval(startTimer);
    })

    buttonPause = function () {
        clearInterval(interval);
    }

    buttonReset = function () {
        clearInterval(interval);
        minutes = "00";
        seconds = "00";
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
    }

    return (
        <>
            <h1>
                <span className="hour">00</span>
                :
                <span className="minutes">00</span>
                :
                <span className="seconds">00</span>
                </h1>

                <button className="button-start" onClick ={buttonStart}>Start</button>
                <button className="button-pause" onClick ={buttonPause}>Pause</button>
                <button className="button-reset" onClick ={buttonReset}>Reset</button>

            </>
    )

}