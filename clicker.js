/**
 * Created by navjo on 9/17/2016.
 */
$(document).ready(function() {
    var count = 0;

    $("#banner").click(function () {
        count = count + 1;
        $("#result").text("YOU clicked " + count + "times");
    });
}   )