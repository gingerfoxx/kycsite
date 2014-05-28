$(function() {

        
        <!-- INSTAFEED -->
        
       var feed = new Instafeed({
        get: 'tagged',
        tagName: 'portland',
        clientId: 'bc3dfcbf9a424581909fff9682de9215',
        limit: 6,

    });
    feed.run();
    
    
    
    
    
    <!-- BANNER SLIDE -->
    
    $(".banner").hover(function () {
    $(".bannerslide").toggleClass("slow");
});






});
    
