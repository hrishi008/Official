setInterval(() => {
    // Get the current time
var now = new Date();

// Set the target time to 6:45 PM
var targetTime = new Date();
targetTime.setHours(18);      // Set hours to 6
targetTime.setMinutes(45);    // Set minutes to 45
targetTime.setSeconds(0);     // Set seconds to 0

// Calculate the time remaining
var timeDiff = targetTime.getTime() - now.getTime();

// Convert the time difference to hours, minutes, and seconds
var hours = Math.floor(timeDiff / (1000 * 60 * 60));
var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

// Display the time remaining
// console.log();
document.getElementById('timer').innerHTML='Time remaining until 6:45 PM:'+ hours+ ' hours '+ minutes+ ' minutes '+ seconds+ ' seconds '
}, 1000);