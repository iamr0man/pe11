
const $wrapper = $('.burger-menu');

const $top = $('.burger-top');
const $middle = $('.burger-middle');
const $down = $('.burger-down');

$wrapper.hover(function(){
  if($wrapper.hasClass('active')) {
    $wrapper.removeClass('active');
    $middle.animate({
      opacity: '1'
    }, 300);

    $top.css({
      'transform': 'rotate(0deg) translate(0px, 0px)',
    });

    $down.css({
      'transform': 'rotate(0deg) translate(0px, 0px)',
    });
  } else {
    $wrapper.addClass('active');
    $middle.animate({
      opacity: '0'
    }, 300);

    $top.css({
      'transform': 'rotate(45deg) translate(4px, 2px)'
    });

    $down.css({
      'transform': 'rotate(-45deg) translate(3px, -2px)',
    });
  }
});

$wrapper.hover(function () {
  $(this).toggleClass('burger-active')
});
