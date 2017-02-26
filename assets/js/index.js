$(document).ready( function () {
	var url = "https://api.github.com/users/harishv7/repos";
	var headings = ["Names", "Descriptions", "Repos", "Pages"];
	var names = [], descriptions = [], repos = [], pages = [];

	$.get(url, function (result) {
	    // parse JSON
	    for (var i = 0; i < result.length; i++) { 
	    	names.push(result[i].name);
	    	descriptions.push(result[i].description);
	    	repos.push(result[i].html_url);
	    	pages.push(result[i].homepage);
	    }
	    // populate a table object
	    var table = "";
	    table += "<thead><tr>";
	    for(var i = 0; i < headings.length; i++) {
	    	table += "<th>" + headings[i] + "</th>";
	    }
	    table += "</tr></thead>";
	    table += "<tbody>";
	    for(i = 0; i < names.length; i++) {
	    	var tr = "<tr>";
	    	tr += "<td>" + names[i] + "</td>";
	    	tr += "<td>" + descriptions[i] + "</td>";
	    	tr += "<td>" + repos[i] + "</td>";
	    	tr += "<td>" + pages[i] + "</td>";
	    	tr += "</td>"
	    	tr += "</tr>";
	    	table += tr;
	    	console.log(tr);
	    }
	    table += "</tbody>";
	    document.getElementById("myTable").innerHTML = table;
	    $('#myTable').DataTable();
	}.bind(this));

} );