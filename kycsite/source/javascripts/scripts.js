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
   
//   		$('.tour1').click(function() {
//			$(window).scrollTo('#multitourclick', 1000, {offset: 475});
//			/* $('visitus').addClass('.a:hover'); */	
//		});

//		$('.tour2').click(function() {
//			$(window).scrollTo('#pdxtourclick', 1000, {offset: 475});
			/* $('visitus').addClass('.a:hover'); */	
//		});


   
//		$('.tour3').click(function() {
//			$(window).scrollTo('#diytourclick', 1000, {offset: 475});
			/* $('visitus').addClass('.a:hover'); */	
//		});
		

//Active Tours

$('.tour1').click(function () {
	$(this).addClass('multiactive');
	$('.tour2').removeClass('pdxactive');
	$('.tour3').removeClass('diyactive');
});

	$('.tour2').click(function () {
	$(this).addClass('pdxactive');
		$('.tour1').removeClass('multiactive');
		$('.tour3').removeClass('diyactive');
});

$('.tour3').click(function () {
 $(this).addClass('diyactive');
 	$('.tour1').removeClass('multiactive');
	$('.tour2').removeClass('pdxactive');
});







//TOUR INFO SLIDE


$('.tour1').click(function() {
	$('.portland, .diycolumn').fadeOut(0);
	$('.multicultural').fadeIn(1000);
   // $('.portland, .diycolumn').hide();
});

$('.tour2').click(function() {
	$('.multicultural, .diycolumn').fadeOut(0);
	$('.portland').fadeIn(1000);
	// $('.multicultural, .diycolumn').hide();

});

$('.tour3').click(function() {
	$('.portland, .multicultural').fadeOut(0);
	$('.diycolumn').fadeIn(1000);
	// $('.multicultural, .portland').hide();

});


// SLICKNAV

$(function(){
		$('#menu').slicknav();

	});
	
	
	
	
	
	
		
	
	
	
	
	
	
	




    
});
console.log('after');