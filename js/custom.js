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
    cutout: 50
  };

  doughnutWidget.render(data());

  setInterval(init, 2000);
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

arrayOfDataMulti = new Array(
   	[[22,14,44,26],'2007'],
   	[[54,18,38,38],'2008'],
   	[[66,24,32,57],'2009']
);	

$('#exampleMulti').jqBarGraph({
  	data: arrayOfDataMulti,
  	showValues: false,
  	colors: ['#242424','#437346','#97D95C'] 
});

arrayOfDataMulti2 = new Array(
   	[[14,55,45,21],'2007'],
   	[[11,51,23,95],'2008'],
   	[[12,23,54,20],'2009']
);	

$('#exampleMulti2').jqBarGraph({
  	data: arrayOfDataMulti2,
  	showValues: false,
  	colors: ['#242424','#437346','#97D95C'] 
});

$('#icon').on('click', function(){

    $(this).parent()
    .toggleClass('contact')
    .toggleClass('contactexpand');

});