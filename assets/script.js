//to display date on jumbotron
var rightNow = moment().format('dddd');
var currentDay = moment().format('MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = rightNow + " " + currentDay;
//variables for different times
var nineAm = dayjs().hour("09");
var tenAm = dayjs().hour("10");
var elevenAm = dayjs().hour("11");
var twelvePm = dayjs().hour("12");
var onePm = dayjs().hour("13");
var twoPm = dayjs().hour("14");
var threePm = dayjs().hour("15");
var fourPm = dayjs().hour("16");
var fivePm = dayjs().hour("17");

//variable to hold current time
var currentTime = dayjs().hour();
console.log(currentTime-9);

//variable to hold created tasks
var tasks = {};

//function to load tasks
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if(!tasks) {
        tasks = []
    };
};

//function to save text to local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//function to check current time vs work day scheduler time and add class if current, future, or past
var checkTime = function() {
    if (currentTime - 16 > 0) {
        $(".form-control").addClass("alert alert-secondary");
    }
    else if (currentTime - 16 === 0) {
        $(".form-control").addClass("alert alert-danger");
    }
    else {
        $(".form-control").addClass("alert alert-success");
    };
};

checkTime();

//event listener for save button
$(".btn").on("click", function() {
    saveTasks();
});

//event listener for text input
$(".form-control").on("click", function() {
    var text = $(this)
    .text()
    .trim();

    var textInput = 

    tasks = $(this).replaceWith(textInput);

    textInput.trigger("focus");

});


loadTasks();
