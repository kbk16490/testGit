// JavaScript Document
$(document).ready(function() {
    	
		
	$('.play').on("click",function()
	{
		$('#myvideo').get(0).play();
	});
	
	$('.stop').on("click",function()
	{
		$('#myvideo').get(0).pause();
	});
	
	$('.total').on("click",function()
	{
		var dur = $('#myvideo').get(0).duration;
		$('.videodata p').text("Total duration: " + Math.floor(dur) + " 	seconds");
		//alert("Total duration: " + Math.floor(dur) + " 	seconds");
	});
	
	$('.present').on("click",function()
	{
		var current = $('#myvideo').get(0).currentTime;
		$('.videodata p').text("Present Time: " + Math.floor(current) + " 	seconds");
		
	});
	
	$('.timeleft').on("click",function()
	{
		var duration = $('#myvideo').get(0).duration;
		var currentTime = $('#myvideo').get(0).currentTime;
		var timeLeft = duration - currentTime;
		$('.videodata p').text("Time Left : " + Math.floor(timeLeft) + " seconds");
	});
	
	
	$('.finish').on("click",function()
	{
        $('#myvideo').get(0).load();
				
	});
	
	$('.run').on("click",function()
	{
		$('#myvideo').get(0).play();
		setTimeout(function()
		{
			$('#myvideo').get(0).pause();
		},21000);
		
	});
	
	$('.full').on("click",function()
	{
		var elem = $('#myvideo').get(0);
		if (elem.requestFullscreen) {
			$('#myvideo').get(0).requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			$('#myvideo').get(0).mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			$('#myvideo').get(0).webkitRequestFullscreen();
		}
        				
	});
	
	$('#myvideo').on("ended",function(){
		//alert("Video Ended !!");
		var elem = $('#myvideo').get(0);
		if (elem.exitFullscreen) {
				$('#myvideo').get(0).exitFullscreen();
			} else if (elem.mozCancelFullscreen) {
				$('#myvideo').get(0).mozCancelFullscreen();
			} else if (elem.webkitExitFullscreen) {
				$('#myvideo').get(0).webkitExitFullscreen();
			}
		
	});
	
	
	
	
	
	
	
	
	
	
});