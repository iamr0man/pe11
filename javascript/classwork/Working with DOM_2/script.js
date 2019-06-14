// const gogi = document.getElementById('gogi')

// gogi.classList.add('gogi-link')
// gogi.classList.add('gogi-joke')
// gogi.classList.add('gogi-joke_more')
// gogi.classList.replace('gogi-joke', 'gogi-link')


function createRectangle() {
    const square = document.createElement('div');
    square.style.cssText = 'margin: 20px; width: 100px; height: 100px; background-color: brown';
    document.body.appendChild(square)
}

// createRectangle();

function createRectangles(size, fColor, sColor) {
    const square_f = document.createElement('div');
    const square_s = document.createElement('div');
    square_f.style.cssText = `margin: 20px; width: ${size}px; height: ${size}px; background-color: ${fColor}`;
    square_s.style.cssText = `margin: 20px; width: ${size}px; height: ${size}px; background-color: ${sColor}`;
    document.body.appendChild(square_f);
    document.body.appendChild(square_s);
}

// createRectangles(70, 'blue', 'violet')


function createRectangles(size, color){
    for(let i = 0; i < size; i++){
        const square = document.createElement('div');
        square.classList.add('scr')
        square.style.cssText = `margin: 30px; width: ${size}px; height: ${size}px; background-color: ${color}; display: inline-block`;
        document.body.appendChild(square);
    }
}

// createRectangles(60, 'gold')


function woodSquare(color){
    let fragment = document.createDocumentFragment();
    for(let i = 0; i < 64; i++){
        const square =document.createElement('div');
        square.className = 'wood-square';
        square.style.backgroundColor = color;
        fragment.append(square);
    }
    return document.querySelector('.wood').appendChild(fragment);
}

woodSquare();


