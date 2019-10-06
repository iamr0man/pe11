const url = 'http://localhost:3000/clients'; 

document.addEventListener('DOMContentLoaded', () => {

    const content = document.querySelector('.content');

    fetch(url)
        .then((res) => {
            return res.json(); 
        })
        .then((res) => {
            const html = res.data.map(i => new Client(i).render()).join('');

            content.insertAdjacentHTML('beforeend', html.replace(/,/g, ''));
        })
        .catch(e => console.log(e))

        content.addEventListener('click', onContentClick);
});

function onContentClick(e){
    e.preventDefault();
    const element = e.target;
    const id = element.getAttribute('data-id');
    fetch(`${url}/${id}`).
        then(res => {
            return res.json();
        })
        .then(res => {
            console.log(new Client(res.data[0]));
        })
}