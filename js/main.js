// $('#testimonial-slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   dotsClass: "my-dots",
//   prevArrow: $('.prev'),
//   nextArrow: $('.next')
// });


$('#testimonial-slider').slick({
  slidesToScroll:1,
  infinite: false,
	mobileFirst: true,
	slide: ".slide",
	variableWidth: true,
	appendArrows: '.slider-buttons',
	appendDots: '.slider-buttons',
	dotsClass: 'slider-dots',
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	responsive: [
		{
			breakpoint: 640,
			settings: {
			  slidesToScroll:2,
			  dots: true, 
			  arrows: true,
			}
		 },
		{
			breakpoint: 1024,
			settings: {
			  slidesToScroll:3,
			  dots: true, 
			  arrows: true,
			}
		 },
	 ]
 });