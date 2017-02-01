function DatePicker(id, callback) {
    this.id = id;
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

    //if(one box get clikced) {
   // 	callback(this.id, one box);
    //}
  //}


  this.render = function(date) {
  	var calendar = document.getElementById(this.id);
  	var monthRow = document.createElement("DIV");
  	monthRow.setAttribute("class", "month");
  	var list = document.createElement("UL");

  	var prev = document.createElement("LI");
  	prev.setAttribute("class", "prev");
  	prev.innerHTML = "<";

  	var next = document.createElement("LI");
  	next.setAttribute("class", "next");
  	next.innerHTML = ">";

  	var title = document.createElement("LI");
  	title.setAttribute("style", "text-align:center");
    title.innerHTML = this.monthList[date.getMonth()];
  	title.innerHTML += "<br>";
    var year = document.createElement("SPAN");
    year.setAttribute("style", "font-size: 16px");
    year.innerHTML = date.getFullYear();
    title.appendChild(year);

  	list.appendChild(prev);
  	list.appendChild(next);
  	list.appendChild(title);
  	monthRow.appendChild(list);
  	calendar.appendChild(monthRow);

//  <ul>
//    <li class="prev">❮</li>
//    <li class="next">❯</li>
//    <li style="text-align:center">
//      August<br>
//      <span style="font-size:18px">2016</span>
//    </li>
//  </ul>
//</div>
  }
}
