var mm;
var yy = 2020;
var headMonth;

window.addEventListener('load', function() {
    tbl = document.getElementById('calendar');
    
    headMonth = document.getElementById('headMonth');
    headMonth.addEventListener('change', generateCalendar, false);

    generateCalendar();
});

function getMonthLenght(year, month) {
    return new Date(year, month, 0).getDate();
}

function getFirstDay(year,month) {
    return new Date(yy + '/' + mm + "/" + 1).getDay();
}

function generateCalendar() {
    tbl.innerHTML = "";
    mm = headMonth.value;

    //Used to fill TH element with days of the week
    var date = 1;
    var days = ["S", "M", "T", "W", "T", "F", "S"];
    var row = document.createElement('tr');
    days.forEach(function(currentValue) {
        var cell = document.createElement('th');
        var cellText = document.createTextNode(currentValue);
        cell.appendChild(cellText);
        row.appendChild(cell);
        tbl.appendChild(row);  
    });

    //Used to fill TD elements with the days
    for(var i = 0; i < 7; i++) {
        var row = document.createElement('tr');

        for(var j = 0; j < 7; j++) {
            if(i == 0 && j < getFirstDay(yy,mm)) {
                cell = document.createElement('td');
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > getMonthLenght(yy, mm)) {
                break;
            } else {
                cell = document.createElement('td');
                cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }
}

function converterMes(m) {
    switch(m) {
        case 1:
            return "Janeiro";
            break;
        case 2:
            return "Fevereiro";
            break;
        case 3:
            return "Março";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Maio";
            break;
        case 6:
            return "Junho";
            break;
        case 7:
            return "Julho";
            break;
        case 8:
            return "Agosto";
            break;
        case 9:
            return "Setembro";
            break;
        case 10:
            return "Outubro";
            break;
        case 11:
            return "Novembro";
            break;
        case 12:
            return "Dezembro";
            break;
    }
}

