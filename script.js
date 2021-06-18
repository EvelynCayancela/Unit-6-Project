$(".aboutMe").hover(function() {
    $(".frank-ocean").slideUp();
    $(".frank-ocean").slideDown();
});
$("div").click(function (){
	$("h1").toggle(); 
}); 
$("img").mouseenter(function (){
	$(".franks-posts").fadeToggle();  
}); 
$(".frank-friends").dblclick(function() {
    $("h3").hide();
    
});
