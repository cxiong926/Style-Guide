$(document).ready(function(){

    $(".cardHover").on({
        mouseenter: function(){
            $(this).css("background-color", "#d2c2ad");
        },  
       
        mouseleave: function(){
            $(this).css("background-color", "#DCD0C0");
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