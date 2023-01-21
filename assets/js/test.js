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

var id9 = $("9");
var id10 = $("10");
var id11 = $("111");
var id12 = $("12");
var id13 = $("13");
var id14 = $("14");
var id15 = $("15");
var id16 = $("16");
var id17 = $("17");

var timeArray = [
    id9,
    id10,
    id11,
    id12,
    id13,
    id14,
    id15,
    id16,
    id17,
]


for (var i = 0; i < timeArray; i++) {

if (timeArray[i].val < now) {
  input-cont.addClass("past");
} else if (timeArray[i].val > now) {
    input-cont.addClass("future");
} else {
    input-cont.addClass("present");
}
}
