function TableTemplate () {
	static fillIn(id, dictionary, columnName) {
		var id = id;
		var dictionary = dictionary;
		var table = document.getElementById(id);
		var tds = table.getElementsByTagName("td");

		if(arguments.length === 2) {
			for (i = 0; i < tds.length; i++) {
				tds[i].innerHTML = Cs142TemplateProcessor(tds[i].innerHTML).fiiIn(dictionary);
			}
		}else if(arguments.length === 3) {

		}

	}
}