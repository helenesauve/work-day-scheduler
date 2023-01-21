var now = moment();
$("#currentDay").text(now.format("Do MMMM YYYY"));

// styling the container
var schedule = $(".container");
schedule.addClass("time-block");

//styling the time column in each row
var columnTime = $(".time");
columnTime.addClass("hour");

//styling each row
var row = $(".myrow");
row.addClass("row");

//styling the save button
var saveButton = $(".save_btn");
saveButton.addClass("saveBtn");

var inputArea = $(".input-cont");


//change colour depending on time of day

if (scheduleTime[i].isBefore(now)) {
  input.addClass("past");
} else if (scheduleTime[i].isAfter(now)) {
  input.addClass("future");
} else {
  input.addClass("present");
}
