console.log('before');
$(function() {

        
       // INSTAFEED
        
       var feed = new Instafeed({
        get: 'tagged',
        tagName: 'portland',
        clientId: 'bc3dfcbf9a424581909fff9682de9215',
        limit: 6,

    });
    feed.run();
    
    
    // SCROLL TO
    
    $('.mainlogo').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
    
    
    $('.visituslink').click(function() {
		$(window).scrollTo('#visitus', 1000, {offset: -75});
		/* $('visitus').addClass('.a:hover'); */
	});
	
    $('.schedulelink').click(function() {
		$(window).scrollTo('#schedule', 1000, {offset: -75});
		/* $('visitus').addClass('.a:hover'); */	
	});
	
	    $('.tourslink').click(function() {
		$(window).scrollTo('#tours', 1000, {offset: -74});
		/* $('visitus').addClass('.a:hover'); */	
	});
    
    




//TOUR INFO SLIDE


$('.tour1').click(function() {
	$('.multicultural').slideToggle("slow");
	$('.portland, .diycolumn').slideUp("fast");
});

$('.tour2').click(function() {
	$('.portland').slideToggle("slow");
	$('.multicultural, .diycolumn').slideUp("fast");
});

$('.tour3').click(function() {
	$('.diycolumn').slideToggle("slow");
	$('.portland, .multicultural').slideUp("fast");
});


// SLICKNAV

$(function(){
		$('#menu').slicknav();

	});




    
});
console.log('after');