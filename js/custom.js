new WOW().init();

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

Chart.defaults.global.animationSteps = 50;

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

// Cache selectors
var lastId,
    topMenu = $("#nav-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 600);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("menu__item--current")
         .end().filter("[href='#"+id+"']").parent().addClass("menu__item--current");
   }                   
});