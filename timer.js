/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/
/*jslint node: true*/

$(document).ready(function () {
    "use strict";
    var seconds, timer, location = document.getElementById("location"), $start = $("#start"), counter = 0,
        $stop = $("#stop"), $clear = $("#clear"), flag = 0, time = document.getElementById("time"),
        iterations = document.getElementById("iterations");

    $start.click(function () {
        seconds = parseInt(time.value, 10);
        
        if (flag > 0) {
            seconds = parseInt(location.innerHTML, 10);
        }
        
        timer = window.setInterval(function () {
            location.innerHTML = seconds;
            seconds--;
            
            if (seconds <= 0) {
                seconds = parseInt(time.value, 10);
                flag = 0;
                counter++;
                iterations.innerHTML = counter;
            }
            
        }, 1000);
    });

    $stop.click(function () {
        clearInterval(timer);
        flag++;
    });
    
    $clear.click(function () {
        clearInterval(timer);
        location.innerHTML = 0;
        flag = 0;
        iterations.innerHTML = 0;
        counter = 0;
        time.value = "";
    });
});