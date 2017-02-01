function DatePicker(id, callback) {
    this.id = id;
    this.monthList =new Array(12);
    monthList[0]="January";
    monthList[1]="February";
    monthList[2]="March";
    monthList[3]="April";
    monthList[4]="May";
    monthList[5]="June";
    monthList[6]="July";
    monthList[7]="August";
    monthList[8]="September";
    monthList[9]="October";
    monthList[10]="November";
    monthList[11]="December";

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
  	title.innerHTML += "<br><span style=\"font-size:18px\">2016</span>";

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
