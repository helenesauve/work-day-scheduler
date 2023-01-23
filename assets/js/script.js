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

// finds the attribute id for each div and assigns a colour to each input based on current time
schedule.children("div").each(function() {
    console.log(this)
    console.log(this.children[0].getAttribute("id"), time)
    var key = this.children[0].getAttribute("id")
    var storage = localStorage.getItem(key)
    if(storage != null){
        this.children[1].value = storage
    }   
    if(this.children[0].getAttribute("id") < time){
        this.children[1].classList.add("past")
    }
    else if(this.children[0].getAttribute("id") == time){
        this.children[1].classList.add("present")
    } else{
        this.children[1].classList.add("future")
    }
}
)

//save input in local storage and save it after refresh

saveButton.on("click", function (event) {
  event.preventDefault();
  console.log(event.target)
  console.log(this.previousElementSibling.value)
  var key = this.previousElementSibling.previousElementSibling.getAttribute("id")
  localStorage.setItem(key, this.previousElementSibling.value);
});

