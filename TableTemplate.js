"use strict";

class TableTemplate {

	static fillIn(id, dictionary, columnName) {
		var id = id;
		var dictionary = dictionary;
		var table = document.getElementById(id);
		
		if(arguments.length === 2) {
			var tds = table.getElementsByTagName("td");
			for (var i = 0; i < tds.length; i++) {
				console.log(tds[i].innerHTML);
				var template = new Cs142TemplateProcessor(tds[i].innerHTML);
				tds[i].innerHTML = template.fillIn(dictionary);
				console.log(tds[i].innerHTML);
			}
		}else if(arguments.length === 3) {

		}

	}
}