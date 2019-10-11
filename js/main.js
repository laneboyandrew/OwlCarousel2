$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
  	{items: 1, 
  		loop: true,
  			nav: true,
  				dots: true,
  					responsive:{
  						/*0:{
  							items:1,
  							dots: true,
  							nav: true,
  						},
  						768:{
  							items:1
  							dots: true,
  							nav: true,
  						},
  						992:{
  							items:1
  							dots: true,
  							nav: true,
  						},
  						*/
  						1200:{
  							items:2,
  							dots: true,
  							nav: true,

  						},
  					}});

});