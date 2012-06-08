
// 80% Opacity for button links
	
$("#site_navigation a").mouseover(function () {
$(this).fadeTo("fast", 0.5);
});

$("#slides .next, #slides .prev").mouseover(function () {
$(this).fadeTo("fast", 0.8);
});
	
// Restore to 100%
	
$("#nav a, #slides .next, #slides .prev").mouseout(function () {
$(this).fadeTo("fast", 1);
});

// Show View link on Projects

$(document).ready(function() {
	 
$("#recent-work .block").hover( function() {
$(".view", this).fadeTo("slow", 0.9);
}, function() {
$(".view").hide();
});

});