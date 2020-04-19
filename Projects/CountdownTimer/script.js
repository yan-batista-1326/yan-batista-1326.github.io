var eventName;
var date;
var hour;
var min;
var timerContainer;

window.addEventListener('load', function() {
    eventName = document.getElementById('eventName');
    date = document.getElementById('date');
    hour = document.getElementById('hour');
    min = document.getElementById('min');
    document.getElementById('startBtn').addEventListener('click', createTimer);

    timerContainer = document.getElementById('timerContainer');
})

function createTimer() {
    timerContainer.removeChild(document.getElementById('noCountdown'));

    var timer = document.createElement('div');
    timer.id = "timer";

    var _eventName = document.createElement('p');
    var _eventNameText = document.createTextNode(eventName.value);
    _eventName.appendChild(_eventNameText);
    timer.appendChild(_eventName);

    var countDown = document.createElement('div');
    countDown.id = "countDown";

    //Year
    var _year = document.createElement('p');
    var _yearText = document.createTextNode('00');
    _year.appendChild(_yearText);
    countDown.appendChild(_year);

    //Month
    var _month = document.createElement('p');
    var _monthText = document.createTextNode('00');
    _month.appendChild(_monthText);
    countDown.appendChild(_month);

    //Days
    var _days = document.createElement('p');
    var _daysText = document.createTextNode('00');
    _days.appendChild(_daysText);
    countDown.appendChild(_days);

    //Hour
    var _hours = document.createElement('p');
    var _hoursText = document.createTextNode(hour.value);
    _hours.className = "hours";
    _hours.appendChild(_hoursText);
    countDown.appendChild(_hours);

    var _separator = document.createElement('p');
    var _separatorText = document.createTextNode(':');
    _separator.appendChild(_separatorText);
    countDown.appendChild(_separator);

    //Minute
    var _minutes = document.createElement('p');
    var _minutesText = document.createTextNode(min.value);
    _minutes.className = "min";
    _minutes.appendChild(_minutesText);
    countDown.appendChild(_minutes);

    var _separator2 = document.createElement('p');
    var _separator2Text = document.createTextNode(':');
    _separator2.appendChild(_separator2Text);
    countDown.appendChild(_separator2);

    //Seconds
    var _seconds = document.createElement('p');
    var _secondsText = document.createTextNode('00');
    _seconds.className = "seconds";
    _seconds.appendChild(_secondsText);
    countDown.appendChild(_seconds);

    timer.appendChild(countDown);
    timerContainer.appendChild(timer);

    clean();
}

function clean() {
    eventName.value = '';
    date.value = '';
    hour.value = '';
    min.value = '';
}