$(document).ready(function(){
	
	$(".cardHover").on({
        mouseenter: function(){
            $(this).css("background-color", "#d2c2ad");
        },  
       
        mouseleave: function(){
            $(this).css("background-color", "#DCD0C0");
        },
       
    });
	
	$("#sidebarToggle").click(function() {
		$("#sidebar").slideToggle(200);
	});
	
	$("#iframeAToggle").click(function() {
		$("#iframeA").toggle(200);
		$("#iframeB").hide(200);
	});
	
	$("#iframeBToggle").click(function() {
		$("#iframeB").toggle(200);
		$("#iframeA").hide(200);
	});
	
	
});