$('[data-toggle="slide-collapse"]').on('click', function() {
  $navMenuCont = $($(this).data('target'));
  $navMenuCont.animate({
    'width': 'toggle'
  }, 350);
  $(".menu-overlay").fadeIn(500);

});
$(".menu-overlay").click(function(event) {
  $(".navbar-toggler").trigger("click");
  $(".menu-overlay").fadeOut(500);          
});
$(".close-nav").click(function(event) {
  $(".navbar-toggler").trigger("click");
  $(".menu-overlay").fadeOut(500);          
});



function lockScroll() {
  if ($('body').hasClass('lock-scroll')) {
    $('body').removeClass('lock-scroll');
  }
  else {
    $('body').addClass('lock-scroll');
  }
}