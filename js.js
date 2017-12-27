$(function(){
 $('.slider').slick({
	 slidesToShow:2,
	 dots: true,
	 responsive: [{

      breakpoint: 1002,
      settings: {
        slidesToShow: 1,
		arrows: false
      }
    }]
 });
});