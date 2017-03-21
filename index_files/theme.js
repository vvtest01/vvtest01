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