$(document).ready(function() {
      $('input[type=checkbox]').change(function() {
          $('#envelope').css({
              'animation': 'fall 3s linear forwards',
          });
  
          setTimeout(function() {
              $('#card').css({ 'visibility': 'visible', 'opacity': 1 }); 
          }, 3000); 
      });
  });