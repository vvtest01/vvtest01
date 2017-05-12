$('.slides').slick({
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	
$('.pause').on('click', function() {
    $('.slides')
        .slick('slickPause')
});

$('.play').on('click', function() {
    $('.slides')
        .slick('slickPlay')
});
