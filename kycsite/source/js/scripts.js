
$(function()

{
  $('.instagram').on('willLoadInstagram', function(event, options) {
    console.log(options);
  });
  $('.instagram').on('didLoadInstagram', function(event, response) {
    console.log(response);
  });
  $('.instagram').instagram({
    hash: 'hipster',
    clientId: 'bc3dfcbf9a424581909fff9682de9215'
  });
});

});
    
    