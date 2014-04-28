$(document).ready(function() {



$("#add").on("click",function() {
    
    $("<li>"+'<input type="checkbox">'+"</li>").appendTo("#checkbox_grid");
    $("#item_grid").append("<li>" + $("#item").val() + "</li>");
     $("#quantity_grid").append("<li>" + $("#quantity").val() + "</li>");
    $("#price_grid").append("<li>"+ $("#price").val() + "</li>");
    var amount = $("#quantity").val() * $("#price").val();
    $("#total_grid").append("<li>" + amount +"</li>");
  
});

var total = 0;

$("#calculate").click(function() {
$.each($("#total_grid li"), function( index, value ) {
  total = total + parseFloat($(value).text());
});
    
    
    
$("#sum_total").val(total);
    
});




    $("#remove").on("click", function() {
     $(".list :last-child").remove();
     
                
   });

  $("input").click(function() {
    // Reset the colors first.
    //$(".column .list  li").css({"background-color":"transparent"});
    $.each($("input[type=checkbox]:checked "), function( index, value ) {

        // Get the index (for the nth-child) by grabbing the parent LI of the checkbox. Add one since jQuery starts counting at 0 and CSS starts at 1.
        var indexval = $(this).parent("li").index() + 1;
        //Now update the CSS
        $(".column .list li:nth-child("+indexval+")").remove();
    });
 });
         
});
                