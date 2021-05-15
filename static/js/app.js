// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through `data` of each sighting report
function sightingData(data) { 
    tbody.text("")

data.forEach(function(UFOsightings) {
    
// Use d3 to append one table row `tr` for each sighting report
var row = tbody.append("tr");

// Use `Object.entries` to console.log each sighting report value
Object.entries(UFOsightings).forEach(function([key, value]) {
    
// Use d3 to append 1 cell per sighting report value (date/time, city, state, country, shape, and comment)
var cell = row.append("td");
// Use d3 to update each cell's text with sighting report values (date/time, city, state, country, shape, and comment)
cell.text(value);
});
})}

// Create new table for search results
sightingData(tableData)

var inputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data on search date and display in new result table
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var result_table = tableData.filter(UFOsightings => UFOsightings.datetime===inputText.property("value"))
    sightingData(result_table)
}

// event listener to handle change and click
inputText.on("change", changeHandler)
button.on("click", changeHandler)
