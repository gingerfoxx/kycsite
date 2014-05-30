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
    
    
    //BANNER SLIDE HOVER ON LOGO

	
/*
 $(mainlogo).hover(function() {
		$();
	});
*/



//TOUR INFO SLIDE


$('.tour1').click(function() {
	$('.multicultural').slideDown("slow");
	$('.portland, .diycolumn').slideUp("fast");
});

$('.tour2').click(function() {
	$('.portland').slideDown("slow");
	$('.multicultural, .diycolumn').slideUp("fast");
});

$('.tour3').click(function() {
	$('.diycolumn').slideDown("slow");
	$('.portland, .multicultural').slideUp("fast");
});


// BANNER HOVER


/*
$('.mainlogo').hover(function(){
$('.banner').slideDown();

}); 
*/
	$('.mainlogo').hover(function(){
     $('.banner').animate({ "top": "+=200px" }, "fast" );
     },
    function () {
        $('.banner').animate({ "top": "-=200px" }, "fast" );

    });



});
    
