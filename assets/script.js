//to display date on jumbotron
var rightNow = dayjs().format("dddd MMMM DD YYYY");
document.getElementById("currentDay").innerHTML = rightNow;

//variable to hold current time
var currentTime = dayjs().hour();

//click listener for save button
$(".btn").on("click", function() {
     console.log(this);
     var text = $(this).siblings(".description").val();
     var time = $(this).parent().attr("id");

     localStorage.setItem(time, text);
});

//load save data from LocalStorage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

var checkTime = function () {
    //loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        //check time vs currentTime
        if (blockTime < currentTime) {
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
};

//call checkTime() function
checkTime();


