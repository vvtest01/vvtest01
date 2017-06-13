$('.slides').slick({
  slidesToShow: 5,
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

$(window).load(function() {
  doughnutWidget.options = {
    container: $('#donut'),
    width: 100,
    height: 100,
    class: 'donut1',
    cutout: 50,
  };

  doughnutWidget.render(data());

  setInterval(init, 10000);
});

function init() {
  doughnutWidget.render(data());
}

function data() {
  var data = {
  서울: {
    val: Math.round(0.63 * 100),
    color: '#E24B40'
  },
  부산: {
    val: Math.round(100),
    color: '#E24B40',
    class: 'donut2'
  }
};

  return data;
}

Chart.defaults.global.animationSteps = 30;

$( document ).ready(function() {
$('#seoulpie').circliful({
	foregroundColor: "#E24B40",
	backgroundColor: "#dfdfdf",
	foregroundBorderWidth: 40,
	backgroundBorderWidth: 40,
	showPercent: false,
	textAdditionalCss: "display: none;",
	textStyle: "font-size: 16px;",
	textY: 100,
	textX: 100,
	animateInView: true
});
});

$( document ).ready(function() {
$('#busanpie').circliful({
  foregroundColor: "#E24B40",
  backgroundColor: "#dfdfdf",
  foregroundBorderWidth: 40,
  backgroundBorderWidth: 40,
  showPercent: false,
  textAdditionalCss: "display: none;",
  textStyle: "font-size: 16px;",
  textY: 100,
  textX: 100,
  animateInView: true
});
});