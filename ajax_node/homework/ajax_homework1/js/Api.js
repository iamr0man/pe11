class Api {
    httpGet(url) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', url, true);
            
            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText))
                }
            }
            xhr.send();
        });
    }
}

