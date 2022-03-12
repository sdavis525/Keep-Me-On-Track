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


    function timeClock() {
        //get current number of hours.
        var presentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockTime)

            //check if we've moved past this time
            if (blockTime < presentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockTime === presentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeClock();
})