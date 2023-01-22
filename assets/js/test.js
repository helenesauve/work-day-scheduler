var now = moment();
$("#currentDay").text(now.format("Do MMMM YYYY"));

//setting the current time
var time = now.hour();

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

var id9 = $("#9");
var id10 = $("#10");
var id11 = $("#11");
var id12 = $("#12");
var id13 = $("#13");
var id14 = $("#14");
var id15 = $("#15");
var id16 = $("#16");
var id17 = $("#17");

var timeArray = [
  (id9 = 9),
  (id10 = 10),
  (id11 = 11),
  (id12 = 12),
  (id13 = 13),
  (id14 = 14),
  (id15 = 15),
  (id16 = 16),
  (id17 = 17),
];

// going through time array to assign different colour based on now time

schedule.children("div").each(function() {
for (var i = 0; i < timeArray.length; i++) {
    // remove current classes if already there
    schedule.children("div").children("input").removeClass("past present future");
  if (timeArray[i] < time) {
    schedule.children("div").children("input").addClass("past");
  } else if (timeArray[i] > time) {
    schedule.children("div").children("input").addClass("future");
  } else {
    schedule.children("div").children("input").addClass("present");
  }
}
}
)

//save input in local storage and save it after refresh

// for each row

saveButton.on("click", function (event) {
  event.preventDefault();
  var userEvent = inputArea.val();
  localStorage.setItem("User-event", userEvent);
  var recordedEvent = localStorage.getItem(userEvent);
  inputArea.text(recordedEvent.val());
});
