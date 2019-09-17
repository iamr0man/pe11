const http = require('http');
const fs = require('fs');

// http.createServer((req, res) => {
//     if(req.url === '/'){
//         fs.readFile('./titles.json', (err, data) => {
//             if(err){
//                 console.error(err);
//                 res.end('Server Error');
//             } else {
//                 const titles = JSON.parse(data.toString());
//                 fs.readFile('./index.html', (err, data) => {
//                     if(err){
//                         console.error(err);
//                         res.end('Server Error');
//                     } else {
//                         const teml = data.toString();
//                         const html = teml.replace('%', titles.join('<li></li>'));
//                         res.writeHead(200, { 'Content-Type': 'text/html' });
//                         res.end(html);
//                     }
//                 });
//             }
//         });
//     }
// }).listen(8000, '127.0.0.1')

http.createServer( (req, res) => {
    getTitles(res)
}).listen(8000, '127.0.0.1')

function getTitles(res){
    fs.readFile('./titles.json', (err, data) => {
        if(err) return hadError(err, data);
        getTemplate(JSON.parse(data.toString()), res);
    })
}

function getTemplate(titles, res){
    fs.readFile('./index.html', (err, data) => {
        if(err) return hadError(err, res)
        formatHtml(titles, data.toString(), res)
    })
}

function formatHtml(titles, tmpl, res){
    const html = tmpl.replace('%', titles.join('<li></li>'))
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end(html);
}

function hadError(err, res) {
    console.error(err);
    res.end('Sever Error')
}