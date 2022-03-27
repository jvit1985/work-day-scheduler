//to display date on jumbotron
var rightNow = moment().format('dddd');
var currentDay = moment().format('MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = rightNow + " " + currentDay;

//variable to hold current time
var currentTime = dayjs().hour();

//click listener for save button
$(".btn").on("click", function() {
     console.log(this);
     var text = $(this).siblings(".form-control").val();
     var time = $(this).parent().attr(".time-block");

     localStorage.setItem(time, text);
});

//load save data from LocalStorage
$("#hour9 .form-control").val(localStorage.getItem("hour9"));
$("#hour10 .form-control").val(localStorage.getItem("hour10"));
$("#hour11 .form-control").val(localStorage.getItem("hour11"));
$("#hour12 .form-control").val(localStorage.getItem("hour12"));
$("#hour13 .form-control").val(localStorage.getItem("hour13"));
$("#hour14 .form-control").val(localStorage.getItem("hour14"));
$("#hour15 .form-control").val(localStorage.getItem("hour15"));
$("#hour16 .form-control").val(localStorage.getItem("hour16"));
$("#hour17 .form-control").val(localStorage.getItem("hour17"));

var checkTime = function () {
    //loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        //check time vs currentTime
        if (blockTime < currentTime) {
            $(this).addClass("alert alert-secondary");
        }
        else if (blockTime === currentTime) {
            $(this).addClass("alert alert-danger");
        }
        else {
            $(this).addClass("alert alert-success");
        }
    })
};

//call checkTime() function
checkTime();
