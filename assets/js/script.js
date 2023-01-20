// Display current day

var now = moment();
$("#currentDay").text(now.format("Do MMMM YYYY"));


var schedule = $(".container");

var scheduleTime = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
]

var row = $(".row");


scheduleTime.forEach(function(time, index){
    var col = $("<div>").addClass("col-12").attr("id", index);
    var divTime = $("<div>").addClass(time);
    divTime.addClass("hour");
    var input = $("<input>").addClass("user-input");
    var save = $("<div>").addClass("saveBtn");
    // appending the time element of the column and giving it 'time' as text
    col.append(divTime);
    divTime.text(time);
    // appending the input element of the column
    col.append(input);
    // appending the save button element of the column
    col.append(save);
    save.text("Click here to save");
    row.append(col)
    
}
)



var rowHour = moment().hour(9) // starts calendar at 9:00

schedule.append(rowHour)
 
 
 
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock
// event listener, allow input
    // lesson 1, 5 & 6

// store user input in local storage

// Persist events between refreshes of a page