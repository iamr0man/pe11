function createListOfElement(array) {
    return document.querySelector('.wrap').appendChild(addElementFromArray(array));
}

function addElementFromArray(array) {
    debugger;
    const list = document.createElement('ul')
    array.map(value => {
        const node = document.createElement('li')
        if (typeof value !== 'object') {
            node.innerText = value;
            list.appendChild(node)
        } else {
            list.appendChild(addElementFromArray(value));
        }
    });
    return list;
}

createListOfElement(['big-mak', ['steak', 'salat', 'bread'], 'plus', 'ice cream', 107, 'UAH'])

setTimeout(function () {
    document.body.innerText = '';
}, 10000);