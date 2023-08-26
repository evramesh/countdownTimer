let Hours = document.getElementById("hour")
let Minutes = document.getElementById("minute")
let Seconds = document.getElementById("seconds")


let UpHourEl = document.getElementById("upHour")
let DownHourEl = document.getElementById("downHour")
let UpMinEl = document.getElementById("upMin")
let DownMinEl = document.getElementById("downMin")
let UpSecEl = document.getElementById("upSec")
let DownSecEl = document.getElementById("downSec")


let Stop = document.getElementById("stopBtn")
let Start = document.getElementById("startBtn")
let RestartEl = document.getElementById("restartBtn")


startBtn.addEventListener("click", function() {
    let timerId = setInterval(function() {
        let minuEl = parseInt(Minutes.textContent)
        let sec = parseInt(Seconds.textContent)
        let HouEl = parseInt(Hours.textContent)
        Stop.addEventListener("click", function() {
            clearInterval(timerId)
        })

        if (sec === 0 && minuEl > 0) {
            minuEl -= 1
            Seconds.textContent = "59"

            if (minuEl <= 9) {
                Minutes.textContent = `0${minuEl}`
            } else {
                Minutes.textContent = minuEl
            }
        } else if (minuEl === 0 && sec === 0 && HouEl !== 0) {
            HouEl -= 1
            Minutes.textContent = "59"
            Seconds.textContent = "59"

            if (HouEl <= 9) {
                Hours.textContent = `0${HouEl}`
            } else {
                Hours.textContent = HouEl
            }
        } else {
            sec -= 1
            if (HouEl === 0 && sec === 0 && minuEl === 0) {
                Seconds.textContent = "00"
                clearInterval(timerId)
            } else if (sec <= 9) {
                Seconds.textContent = `0${sec}`
            } else {
                Seconds.textContent = sec
            }
        }



    }, 1000);
})

RestartEl.addEventListener("click", function() {
    Hours.textContent = "05"
    Minutes.textContent = "00"
    Seconds.textContent = "30"
})


UpHourEl.addEventListener("click", function(Event) {
    let HrValue = parseInt(Hours.textContent)
    if (HrValue < 9) {

        HrValue += 1
        Hours.textContent = `0${HrValue}`
    } else {
        HrValue += 1
        Hours.textContent = HrValue
    }
})

DownHourEl.addEventListener("click", function(Event) {
    let HrsubValue = parseInt(Hours.textContent)
    if (HrsubValue < 9) {
        if (HrsubValue === 0) {
            Hours.textContent = "00"
        } else {
            HrsubValue -= 1
            Hours.textContent = `0${HrsubValue}`
        }

    } else {
        HrsubValue -= 1
        Hours.textContent = HrsubValue
    }
})

UpMinEl.addEventListener("click", function(Event) {
    let MinValue = parseInt(Minutes.textContent)
    if (MinValue < 9) {

        MinValue += 1
        Minutes.textContent = `0${MinValue}`
    } else {
        MinValue += 1
        Minutes.textContent = MinValue
    }
})

DownMinEl.addEventListener("click", function(Event) {
    let MinsubValue = parseInt(Minutes.textContent)
    if (MinsubValue < 9) {
        if (MinsubValue === 0) {
            Minutes.textContent = "00"
        } else {
            MinsubValue -= 1
            Minutes.textContent = `0${MinsubValue}`
        }

    } else {
        MinsubValue -= 1
        Minutes.textContent = MinsubValue
    }
})

UpSecEl.addEventListener("click", function(Event) {
    let SecValue = parseInt(Seconds.textContent)
    if (SecValue < 9) {

        SecValue += 1
        Seconds.textContent = `0${SecValue}`
    } else {
        SecValue += 1
        Seconds.textContent = SecValue
    }
})

DownSecEl.addEventListener("click", function(Event) {
    let SecsubValue = parseInt(Seconds.textContent)
    if (SecsubValue < 9) {
        if (SecsubValue === 0) {
            Seconds.textContent = "00"
        } else {
            SecsubValue -= 1
            Seconds.textContent = `0${SecsubValue}`
        }

    } else {
        SecsubValue -= 1
        Seconds.textContent = SecsubValue
    }
})