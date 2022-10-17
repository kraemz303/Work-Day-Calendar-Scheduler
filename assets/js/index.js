var timeDisplayEl = $('#time-date');

function displayTime() {
    var rightNow = moment().format('hh:mm:ss a [on] MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);



