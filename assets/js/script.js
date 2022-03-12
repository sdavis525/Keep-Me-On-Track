//document goes first so html & css will populate first

$(document).ready(function () { 
    //today's date and time
    var todayDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todayDate);

    //Apply click listener for save button 
    $(".saveBtn").on("click", function () {
        //get values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //local storage for items
        localStorage.setItem(time, text);
    })
    //pull data from local storage at every hour
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));



})