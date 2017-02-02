"use strict";

class TableTemplate {
	static fillIn(id, dictionary, columnName) {
		var table = document.getElementById(id);

		if(arguments.length === 2) {
			var tds = table.getElementsByTagName("td");
			for(var i = 0; i < tds.length; i++) {
				var template = new Cs142TemplateProcessor(tds[i].innerHTML);
				tds[i].innerHTML = template.fillIn(dictionary);
			}
		}else if(arguments.length === 3) {
			var headersrow = table.getElementsByClassName("header");
			var headers = headersrow[0].getElementsByTagName("td");
			var columnNumber = headers.length;
			var columntoChange = 0;
			for(var j = 0; j < headers.length; j++) {
				if(dictionary[headers[j].innerHTML.slice(2, -2)] === columnName) {
					columntoChange = j;
				}
				var template = new Cs142TemplateProcessor(headers[j].innerHTML);
				headers[j].innerHTML = template.fillIn(dictionary);
			}

			var rows = table.getElementsByTagName("tr");
			for(j = 1; j < rows.length; j++) {
				var tdtoChange = rows[j].getElementsByTagName("td")[columntoChange];				
				var temp = new Cs142TemplateProcessor(tdtoChange.innerHTML);
				tdtoChange.innerHTML = temp.fillIn(dictionary);
			}
		}
	}
}
