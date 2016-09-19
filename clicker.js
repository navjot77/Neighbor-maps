/**
 * Created by navjo on 9/17/2016.
 */
$(document).ready(function() {
 count = 0;

   
    $(".select").each(function(){
            console.log("yes");
        $(this).click(
            (function (copy) {
            return function() {
                copy = copy + 1;
                count="YOU clicked " + copy + "times";
                data=$(this).next('#banner').html();
                console.log(data)
                 $(".display").html("")
                 $(".display").append(data);
                $(".display").append(count);
            }
        }) (count));
    });

      
})