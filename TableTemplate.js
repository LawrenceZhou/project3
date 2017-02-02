"use strict";

class TableTemplate {

	static fillIn(id, dictionary, columnName) {
		var id = id;
		var dictionary = dictionary;
		var table = document.getElementById(id);

		if(arguments.length === 2) {
			var tds = table.getElementsByTagName("td");
			for (var i = 0; i < tds.length; i++) {
				var template = new Cs142TemplateProcessor(tds[i].innerHTML);
				tds[i].innerHTML = template.fillIn(dictionary);
			}
		}else if(arguments.length === 3) {
			var headersrow = table.getElementsByClassName("header");
			var headers = headersrow[0].getElementsByTagName("td");
			var columnNumber = headers.length;
			var columntoChange = 0;
			for (var i = 0; i < headers.length; i++) {
				if(dictionary[headers[i].innerHTML.slice(2, -2)] === columnName) {
					columntoChange = i;
					break;
				}
			}

			var rows = table.getElementsByTagName("tr");
			//console.log(rows.length);
			for (var i = 0; i < rows.length; i++) {
				var tdtoChange = rows[i].getElementsByTagName("td")[columntoChange];
				//console.log(tdtoChange);				
				var template = new Cs142TemplateProcessor(tdtoChange.innerHTML);
				tdtoChange.innerHTML = template.fillIn(dictionary);
			}
		}

	}
}