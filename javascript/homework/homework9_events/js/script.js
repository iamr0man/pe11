const headerTabs = document.querySelector('.tabs');
const tabsContent = document.querySelector('.tabs-content');

let indexOfHead = 0;
headerTabs.addEventListener('click', showContent);

function showContent(headerTab){
    headerTabs.children[indexOfHead].classList.remove('active')
    tabsContent.children[indexOfHead].style.display = 'none';

    const nodes = Array.prototype.slice.call(headerTabs.children);
    
    indexOfHead = nodes.indexOf(headerTab.target);
    headerTab.target.classList.add('active')
    tabsContent.children[indexOfHead].style.display = 'block';
}