class Character extends Api {
    constructor(){
        super();
    }

    getCharacters(url){
        return super.httpGet(url);
    }

    buildHTML(actors) {
        return '<ul id="characters">' + actors.map(a => `<li>${a.name}</li>`).join('') + '<ul>'
    }
}