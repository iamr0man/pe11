const o = new Cookies();

document.getElementById('btn-auth').addEventListener('click', addCookies);

function addCookies() {
    o.setCookie('expirement', 'novalue', {expires: new Date(Date.now() + 300e3)});
    o.getCookie('new-user') === undefined ? o.setCookie('new-user', 'true') : o.setCookie('new-user', 'false');
}
