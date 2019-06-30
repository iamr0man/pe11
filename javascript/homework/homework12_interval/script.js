const $firstElem = $('.image-to-show').eq(0)
let i = 0;

$firstElem.fadeIn().show();


let interval = setInterval(carousel, 1200);

function carousel() {
    const $items = $('.image-to-show');
    console.log('tick')
    $items.eq(i).fadeOut().hide();
    $items.eq(++i).fadeIn().show();
    if (i === $items.length) {
        i = 0;
        $firstElem.fadeIn().show();
    }
}

const pause = document.createElement('button')
pause.innerText = 'Pause'
document.body.appendChild(pause);

const play = document.createElement('button')
play.innerText = 'Continue'
document.body.append(play);

let isPaused = false;

$(pause).click(function () {
    clearInterval(interval)
    isPaused = true;
});

$(play).click(function () {
    if (isPaused) {
        interval = setInterval(carousel, 1200);
        isPaused = false;
    }
});