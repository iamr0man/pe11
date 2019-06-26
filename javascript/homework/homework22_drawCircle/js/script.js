const btn = document.getElementById('btn');
const diameter = document.querySelector('input[type="text"]')
const script = document.querySelector('script')
const wraper = document.createElement('div');

btn.addEventListener('click', drawCircle);

function drawCircle(){
    if(document.body.children[2] === wraper){
        while(wraper.firstChild){
            wraper.removeChild(wraper.firstChild);
        }
    }
    document.body.insertBefore(wraper, script);
    for(let i = 0; i < 100; i++){
        const current = document.createElement('div');
        current.classList.add('circle')
        current.style.width = `${diameter.value}` + 'px'; 
        current.style.height = `${diameter.value}` + 'px';
        current.style.border = `3px solid rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        wraper.appendChild(current);    
    }
}

function randomColor(){
    return Math.floor(Math.random()*255);
}

wraper.addEventListener('click', deleteCircle);

function deleteCircle(event) {
    this.removeChild(event.target)
}