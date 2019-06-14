// Example 15.2

function countTags(n) {
    let numTags = 0;

    if (n.nodeType === 1) //Node.ELEMENT_NODE
        numTags++;

    let children = n.childNodes;

    for (let i = 0; i < children.length; i++) {
        numTags += countTags(children[i]);
    }
    return numTags;
}

//Example 15.3

function getText(n) {
    let strings = [];
    getStrings(n, strings);
    return strings.join('').replace(/\r?\n/g, "");

    function getStrings(n, strings) {
        if (n.nodeType == 3) //Node.TEXT_NODE
            strings.push(n.textContent);
        else if (n.nodeType == 1) {
            for (let m = n.firstChild; m != null; m = m.nextSibling) {
                getStrings(m, strings);
            }
        }
        return strings;
    }
}

// Example 15.4
//Поиск элементов заданного тега, с заданным классом. Возвращает массив.

function getElements(classname, tagname, root) {

    if (!root) root = document.documentElement;
    else if (typeof root == 'string') root = document.getElementById(root);

    if (!tagname) tagname = '*';

    let all = root.getElementsByTagName(tagname);

    if (!classname) return all;

    let elements = [];
    for (let i = 0; i < all.length; i++) {
        if (isMember(all[i], classname)) {
            elements.push(all[i]);
        }
    }

    return elements;


    function isMember(element, classname) {
        let classes = element.className;
        if (!classes) return false;
        if (classes === classname) return true;

        let whitespace = /\s+/;
        if (!whitespace.test(classes)) return false;

        let fewClasses = classes.split(' ');
        for (let i = 0; i < fewClasses.length; i++) {
            if (fewClasses[i] == classname) return true;
        }
        return false;
    }
}

//Example 15.5

function sortkids(e) {
    debugger;
    if (typeof e === 'string') e = document.getElementById(e);

    let kids = [],
        childrens = e.children;
    for (let i = 0; i < childrens.length; i++) {
        if (childrens[i].nodeType === 1) // Node.ELEMENT_NODE
            kids.push(childrens[i]);
    }

    kids.sort(function (a, b) {
        const f = a.firstChild.textContent;
        const s = b.firstChild.textContent;

        if (f < s) return -1;
        else if (s < f) return 1;
        return 0;
    });

    for (let i = 0; i < kids.length; i++) {
        e.appendChild(kids[i]);
    }
}

//Example 15.6

function upcase(n) {

    if (n.nodeType === 3) {
        n.textContent = n.textContent.toUpperCase();
    } else {
        const nChildren = n.childNodes;
        for (let i = 0; i < nChildren.length; i++) upcase(nChildren[i])
    }
}

//Example 15.7

function embolden(n) {

    if (typeof n === 'string') n = document.getElementById(n);

    let square = document.createElement('div')
    square.style.cssText = `margin: 30px; width: 50px; height: 50px; background-color: gold`;
    let parent_node = n.parentNode;
    parent_node.replaceChild(square, n);
    square.appendChild(n);
}

//Example 15.8
function animationBlocks(classOfBlocks) {
    debugger;
    classOfBlocks = document.querySelectorAll(classOfBlocks);
    for (let i = 0; i < classOfBlocks.length; i++) {
        classOfBlocks[i].className = 'animationInlineBlock';
    }
}

// Example 15.9
function reverse(n) {
    debugger;
    n = document.getElementById(n);
    var f = document.createDocumentFragment();
    while (n.lastChild) f.appendChild(n.lastChild);
    n.appendChild(f);
}


//Example 15.11
function getSelectedText() {
    debugger;
    if (window.getSelection) {
        alert(window.getSelection().toString());
    } else if (document.getSelection) {
        return document.getSelection();
    }
}

// Example
function getTextFieldSelection(e) {
    if (e.selectionStart != undefined && e.selectionEnd != undefined) {
        var start = e.selectionStart;
        var end = e.selectionEnd;
        return e.value.substring(start, end);
    } else return ""; // Не поддерживается данным броузером
}

function methodAll() {
    debugger;
    var lists = document.all["ingo-block"]; // Ищет все теги <ul> в документе
    // var items = lists.all['P']; // Ищет все теги <li> внутри первого <ul>
    return lists;
}

console.log(methodAll());