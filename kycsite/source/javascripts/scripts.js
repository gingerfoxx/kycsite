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
		$(window).scrollTo('#visitus', 1000);
		/* $('visitus').addClass('.a:hover'); */	
	});
	
    $('.schedulelink').click(function() {
		$(window).scrollTo('#schedule', 1000);
		/* $('visitus').addClass('.a:hover'); */	
	});
	
	    $('.tourslink').click(function() {
		$(window).scrollTo('#tours', 1000);
		/* $('visitus').addClass('.a:hover'); */	
	});
    






});
    
