
function saveInfo(event) {
    event.preventDefault();
    // var note = $(".form-group [name=note]").val()
    var note = $(this).prev().val();
    console.log(note)


    //we want the key to be the id and the value to be whatever we type in the box
    localStorage.setItem($(this).data("num"), note);


}






//this function will write the local storage values into the input fields
$("input").each(function () {
    var currentId = $(this).attr("id");
    $("#" + currentId).val(localStorage.getItem(currentId));
});


$(document).on("click", ".saveBtn", saveInfo);



function Clear(event) {
    // event.preventDefault();
    // console.log($(this).data("num"))
    localStorage.removeItem($(this).data("num"))
}

$(document).on("click", ".clearBtn", Clear)


// //function to change the color of the input fields
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

