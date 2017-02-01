function DatePicker(id, callback) {
    this.id = id;
    this.callback = callback;
    this.monthList =new Array(12);
    this.monthList[0]="January";
    this.monthList[1]="February";
    this.monthList[2]="March";
    this.monthList[3]="April";
    this.monthList[4]="May";
    this.monthList[5]="June";
    this.monthList[6]="July";
    this.monthList[7]="August";
    this.monthList[8]="September";
    this.monthList[9]="October";
    this.monthList[10]="November";
    this.monthList[11]="December";
}

  DatePicker.prototype.render = function(date) {
    var thisClass = this;
    var date_day = date.getDate();
    this.date_month = date.getMonth();
    this.date_year = date.getFullYear();
    var calendar = document.getElementById(this.id);
    calendar.innerHTML = "";
    var monthRow = document.createElement("DIV");
    monthRow.setAttribute("class", "month");

    var titleList = document.createElement("UL");

    var prev = document.createElement("LI");
    prev.setAttribute("class", "prev");
    prev.innerHTML = "<";
    prev.onclick = function() {
      thisClass.render(new Date((thisClass.date_month).toString() +"/1/" + thisClass.date_year));
    }
    titleList.appendChild(prev);

    var next = document.createElement("LI");
    next.setAttribute("class", "next");
    next.innerHTML = ">";
    next.onclick = function() {
      //addEventListener("click", this.update(thisClass));
      thisClass.render(new Date((thisClass.date_month + 2).toString() +"/1/" + thisClass.date_year));
    }
    titleList.appendChild(next);
    
    var title = document.createElement("LI");
    title.setAttribute("style", "text-align:center");
    title.innerHTML = this.monthList[this.date_month];
    title.innerHTML += "<br>";
    var year = document.createElement("SPAN");
    year.setAttribute("style", "font-size: 20px");
    year.innerHTML = this.date_year;
    title.appendChild(year);
 
    titleList.appendChild(title);
    monthRow.appendChild(titleList);
    calendar.appendChild(monthRow);

    var weekdaysList = document.createElement("UL");
    weekdaysList.setAttribute("class", "weekdays");
    weekdaysList.innerHTML = "<li>Su</li><li>Mo</li><li>Tu</li><li>We</li>";
    weekdaysList.innerHTML += "<li>Th</li><li>Fr</li><li>Sa</li>";
    calendar.appendChild(weekdaysList);

    var firstDate = new Date((this.date_month + 1).toString() +"/1/" + this.date_year);
    var firstDay = firstDate.getDay();

    var lastDaysNum = this.getMonthDaysNum(parseInt(this.date_year), this.date_month - 1);
    var daysList = document.createElement("UL");
    daysList.setAttribute("class", "days");

    for (i = firstDay; i > 0; i--) {
        var prevDay = document.createElement("LI");
        prevDay.setAttribute("class", "days");
        //prevDay.innerHTML = (lastDaysNum - i).toString();
        prevDay.innerHTML = lastDaysNum.toString() - i + 1;
        daysList.appendChild(prevDay);
    }

    for (i = 1; i <= this.getMonthDaysNum(parseInt(this.date_year), this.date_month); i++) {
        var presDay = document.createElement("LI");
        presDay.setAttribute("class", "days");
        presDay.innerHTML = i.toString();
        presDay.map = {month: thisClass.date_month + 1, day: i, year: thisClass.date_year};
        presDay.onclick = function() {
                thisClass.callback(thisClass.id, this.map);         
        }
        daysList.appendChild(presDay);
    }

    var lastDate = new Date((this.date_month + 2).toString() +"/1/" + this.date_year);
    var lastDay = lastDate.getDay();

    for (i = 1; i <= 7 - lastDay && lastDay !== 0; i++) {
        var nextDay = document.createElement("LI");
        nextDay.setAttribute("class", "days");
        //prevDay.innerHTML = (lastDaysNum - i).toString();
        nextDay.innerHTML = i.toString();
        daysList.appendChild(nextDay);
    }
    calendar.appendChild(daysList);
  }

  DatePicker.prototype.getMonthDaysNum = function(year, month){  
  month = parseInt(month, 10)+1; 
  if(month === -1) {
    month = 12;
    year = year - 1;
  } 
  var d= new Date(year, month, 0);  
  return d.getDate();  
}  
