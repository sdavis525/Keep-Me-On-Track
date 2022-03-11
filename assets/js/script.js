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

  