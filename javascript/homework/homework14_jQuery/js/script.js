const $headTabs = $('.tabs>li');
const $content = $('.tabs-content>li');

$('.tabs').on('click', showContent);

let index = 0;
function showContent(e){
    $headTabs.eq(index).removeClass('active');
    $content.eq(index).hide();
    
    index = $(e.target).index();
    $(e.target).addClass('active');
    $('.tabs-content>li').eq(index).show();
}