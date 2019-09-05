class api {
    get(url) {
        return $.ajax({
            type: 'GET',
            url
        })
    }
}

class List {
    static buildList(items, callBack = (item) => `${item.name}`) {
        if (!Array.isArray(items)) {
            return '';
        }

        return '<ul class="list">' +
            items
            .map(item => `<li>${callBack(item)}</li>`)
            .join('') +
            '</ul>';
    }
}