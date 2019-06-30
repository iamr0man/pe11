// function setDisplayFlex(cssSelector){
//     $(cssSelector).css({display:'flex'});
// }

// setDisplayFlex("#block");

// $.fn.setDisplayFlex = function (){
//     $(this).css({display:'flex'});
// };

// $(".block").setDisplayFlex();

// $.fn.setDisplayFlex = function(alignItems, justifyContent) {
//     $(this).css({
//         display: 'flex',
//         alignItems: alignItems,
//         justifyContent: justifyContent
//     });
// }

// $(".block").setDisplayFlex('center' , "space-evenly")

// $.fn.setDisplayFlex = function(options){
//     $(this).css({
//         display: 'flex',
//         ...options
//     })
// };

// $('.block').setDisplayFlex({
//     alignItems: 'center',
//     justifyContent: 'space-between'
// });

$(document).ready(function () {
    $('.slick-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});