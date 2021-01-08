$('[data-toggle="slide-collapse"]').on('click', function() {
  $navMenuCont = $($(this).data('target'));
  $navMenuCont.animate({
    'width': 'toggle'
  }, 300);
  $(".menu-overlay").fadeIn(500);

});
$(".menu-overlay").click(function() {
  $(".navbar-toggler").trigger("click");
  $(".menu-overlay").fadeOut(500);          
});
$(".close-nav").click(function() {
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