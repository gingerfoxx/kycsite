$(function() {
        
        <!-- INSTAFEED -->
        
       var feed = new Instafeed({
        get: 'tagged',
        tagName: 'hipster',
        clientId: 'de68f28085944589b823933845310883',
        template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a>',
        sortBy: 'random'
    });
    feed.run();
    

});