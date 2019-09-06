const api = new Api()
const filmApi = new Film();

const filmsList = document.getElementById('films');

filmApi.getFilms()
    .then(films => {
        return films.map(item => {

            const filmItem = new FilmItem(item);
            const character = new Character();
    
            filmsList.insertAdjacentHTML('beforeend', filmApi.buildCard(item));

            Promise.all(
                filmItem
                .characters
                .map(url => {
                    return character.getCharacters(url);
                })

            ).then(charRes => {
                const actors = charRes.map(item => new CharacterItem(item));

                filmsList.lastElementChild.insertAdjacentHTML('beforeend', character.buildHTML(actors))
            })
        })
    })
