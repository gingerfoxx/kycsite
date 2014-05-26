$(function() {

        
        <!-- INSTAFEED -->
        
       var feed = new Instafeed({
        get: 'tagged',
        tagName: 'polaroid',
        clientId: 'bc3dfcbf9a424581909fff9682de9215',
        template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a>',
        sortBy: 'random'
    });
    feed.run();

});
    
