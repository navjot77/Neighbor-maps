/**
 * Created by navjo on 9/17/2016.
 */
$(document).ready(function() {
 count = 0;
    var cats=["billi","billa","billu"];
     i=0;
    $(".select").each(function(index){


        console.log(index);


        $(this).click((function (copy)
        {
            return function()
            {
                 name="<h1>"+cats[index]+"</h1>";




              data=$(this).next('#banner').html();
                console.log(data);
                 $(".display").html("");
                 $(".result").html("");

                 $(".display").append(name);
                 $(".display").append(data);
                count12 = "YOU clicked " + copy + "times";
                $(".result").html("");
                $(".result").append(count12);
                console.log("picture clicked")
                copy++;





            }
        }
        ) (count));





    });

      
})