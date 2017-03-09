$(window).scroll(function() {
  var viewableOffset = $("html").offset().top - $(window).scrollTop();
  var nav = $('.navigation');
  var navHr = $('#navHr');
  console.log(viewableOffset);
  if (viewableOffset < -70) {
    var navStyles = {
        backgroundColor: '#fffefd',
    };
    var navWrapStyles = {
    };
    var navHrStyles = {
      borderTop: 'none',
      borderBottom: 'none'
    };
    nav.addClass('scrolled');
  } else {
    var navStyles = {
      backgroundColor: '#F7F2E1',
    };
    var navWrapStyles = {
    };
    var navHrStyles = {
      borderTop: '1px solid rgba(0, 0, 0, 0.2)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
    };
    nav.removeClass('scrolled');
  };
  nav.css( navStyles );
  navHr.css( navHrStyles );
});

$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();

    if($('#js-navigation-menu').is(':hidden')) {
      $('#overlay').css({
        backgroundColor: 'rgba(0,0,0,0.2)',
      });
    } else {
      $('#overlay').css({
        backgroundColor: 'rgba(1,1,1,0.0)',
      });
    }
    
    $('#js-navigation-menu').slideToggle("300",function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
        // $('#overlay').css({
        //   backgroundColor: 'rgba(1,1,1,0.0)',
        // });
        if($('.navigation').hasClass('scrolled')) {
        } else {
          $('#navHr').show();
        }
      } else {
        // $('#overlay').css({
        //   backgroundColor: 'rgba(0,0,0,0.2)',
        // });
        $('#navHr').hide();
      }
    });
  });
});