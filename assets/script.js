//to display date on jumbotron
var rightNow = moment().format('dddd');
var currentDay = moment().format('MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = rightNow + " " + currentDay;
var initialText = $(".form-control").val;

//function to save text to local storage
function saveTasks() {
    localStorage.setItem("textInput", JSON.stringify(initialText));
};

//event listener for save button
$(".btn").on("click", function() {
    saveTasks();
});

//event listener for text input
$(".form-control").on("click", function() {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});



