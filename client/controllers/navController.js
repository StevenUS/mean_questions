app.controller("navController", function($location){
    // Variables
    var $nav = $('.navbar')
        $body = $('body'),
        $window = $(window),
        navOffsetTop = $nav.offset().top,
        $document = $(document);

    function init() {
      $window.on('scroll', onScroll)
      $window.on('resize', resize)
    }

    function smoothScroll(e) {
      e.preventDefault();
      $(document).off("scroll");
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top-40
      }, 0, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
    }

    function resize() {
      $body.removeClass('has-docked-nav')
      navOffsetTop = $nav.offset().top
      onScroll()
    }

    function onScroll() {
      if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
        $body.addClass('has-docked-nav')
      }
      if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
        $body.removeClass('has-docked-nav')
      }
    }

    init();

})
