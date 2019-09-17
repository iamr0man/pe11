class ApiFetch {
    httpGet(url) {
        return fetch(url)
            .then(r => r.json())
    }
}

