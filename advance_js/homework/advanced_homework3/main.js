const tab = document.createElement('table');
const js = document.getElementsByTagName('script');

tab.setAttribute('border', '30');
for(let i = 0; i < 30; i++) {
    const tr = document.createElement('tr');
    tab.appendChild(tr);
    for(let j = 0; j < 30; j++){
        let td = document.createElement('td');
        td.classList += 'white';
        tr.appendChild(td);
    }
}

document.body.insertBefore(tab, js[0]);


document.body.addEventListener('click', bubbling);

function bubbling(e){
    if(e.target.tagName === 'TD'){
        e.target.classList.toggle('clicked-data')
    }
    else if(e.target.tagName === 'BODY') {
        tab.classList.toggle('clicked-table')
    }
}