
function saveInfo(event) {
    event.preventDefault();
    localStorage.setItem($(this).prev().attr("id"), $(this).prev().val());

}




$("input").each(function () {
    var currentId = $(this).attr("id");
    $("#" + currentId).val(localStorage.getItem(currentId));
});

$(document).on("click", ".saveBtn", saveInfo);




//function to change the color of the input fields
function timingColor() {
    var currentHour = moment().format("HH");

    $(".textbox").each(function () {
        var inputField = JSON.parse($(this).attr("id"));

        //if statement to change class based on time of day
        if (currentHour > inputField) {
            $(this).addClass("past");
        }
        else if (currentHour == inputField) {
            $(this).addClass("present");
        }
        else{
            $(this).addClass("future");
        }
    });
}
timingColor();

