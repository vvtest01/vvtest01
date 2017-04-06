$(function () {   
  $('[data-toggle="popover"]').popover() 
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function(){
    $('.test').tooltip({
        container: '.test'
    });
});

  // Run it on single element
  $(function(){
    $('#theting').parallaxify(img);
});

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // changed
    live:         true        // default
     }
)
wow.init();

w3IncludeHTML();