
$(document).ready(function(){

$('.owl-carousel').owlCarousel({
     loop:true,
     margin:30,
     nav:true,
     autoplay:true,
     autoplayTimeout:3500,
     autoplaySpeed:1000,
     autoplayHoverPause:true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:3
         }
} }) 

// go to top
$(window).scroll(function() {
  var dictance = $(window).scrollTop();
 $('.text').text(dictance);

  if (dictance > 700) {
    $('.t_top').fadeIn();
  }
  else{
     $('.t_top').fadeOut();
  };
});
  $('.t_top').on('click', function(){
    $('html').animate( {scrollTop :0 } );
  });


// wow js
wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();



});

