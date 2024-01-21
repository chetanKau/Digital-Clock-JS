
function time() {
    let date = new Date();
    let timeInHours = date.getHours();
    let timeInMinutes = date.getMinutes();
    let timeInSeconds = date.getSeconds();
    console.log(timeInHours, timeInMinutes, timeInSeconds);

    let timeInHoursTHF = timeInHours % 12;
    while (timeInHoursTHF === "0") {
        timeInHoursTHF = 12;
    }

    document.getElementById("hour").innerText = timeInHoursTHF < 10 ? "0" + timeInHoursTHF : timeInHoursTHF;

    document.getElementById("minute").innerText = timeInMinutes < 10 ? "0" + timeInMinutes : timeInMinutes;

    document.getElementById("second").innerText = timeInSeconds < 10 ? "0" + timeInSeconds : timeInSeconds;
    if (timeInHours >= 0 && timeInHours <= 11) {
        document.getElementById("am-pm").innerText = "AM";
    }
    else {
        document.getElementById("am-pm").innerText = "PM"
    }

}

setInterval(time, 1000);