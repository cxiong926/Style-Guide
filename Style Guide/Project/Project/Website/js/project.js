$(document).ready(function(){

    $(".cardHover").on({
        mouseenter: function(){
            $(this).css("background-color", "#F6F4F3");
        },  
       
        mouseleave: function(){
            $(this).css("background-color", "initial");
        },
       
    });

	
	$("#slider").click(function(){
		let value = $("#slider").val();
		$("#distance").empty();
		$("#distance").append(" " + value + " Miles");
	});
	
	$("#reset").click(function(){
		$("#distance").empty();
	});
	
	
});