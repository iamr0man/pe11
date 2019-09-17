class Film extends Api {
    constructor(){
        super();
    }

    getFilms(){
        return super
                .httpGet('https://swapi.co/api/films/')
                .then(res => {
                    return res.results || [];
                })            
    }

    buildCard(film,i){
        return `
        <div class='card card-body mb-3'>
            <h4>${film.title} <span class="text-primary">(${film.episode_id})</span></h4>
            <small>About: ${film.opening_crawl}</small>
            <div id="characters-${i}"></div>
        </div>`
    }
}