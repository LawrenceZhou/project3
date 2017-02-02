"use strict";

class TableTemplate {

	static fillIn(id, dictionary, columnName) {
		var id = id;
		var dictionary = dictionary;
		var table = document.getElementById(id);
		var tds = table.getElementsByTagName("td");

		if(arguments.length === 2) {
			for (var i = 0; i < tds.length; i++) {
				console.log(tds[i].innerHTML);
				var template = new Cs142TemplateProcessor(tds[i].innerHTML);
				tds[i].innerHTML = template.fillIn(dictionary);
				console.log(tds[i].innerHTML);
				//tds[i].innerHTML = Cs142TemplateProcessor(table.innerHTML).fiilIn(dictionary);
			}
			//console.log(table.innerHTML);
			//Cs142TemplateProcessor(table.innerHTML);
			//var template = new Cs142TemplateProcessor(table.innerHTML);
			//console.log(template, typeof(template.template));
			//table.innerHTML = template.fillIn(dictionary);
			//console.log(table.innerHTML);
		}else if(arguments.length === 3) {

		}

	}
}