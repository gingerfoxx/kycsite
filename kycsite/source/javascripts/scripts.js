$(function() {

        
        <!-- INSTAFEED -->
        
       var feed = new Instafeed({
        get: 'tagged',
        tagName: 'hipster',
        clientId: 'bc3dfcbf9a424581909fff9682de9215',

    });
    feed.run();

});
    
