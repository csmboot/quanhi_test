const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Run request .....')
    res.setHeader('Content-Type','text/html');
    res.write('<h3>Xin chào mọi người</h3>');
    res.write('<h2>Mình tên là QuaLV<h2>');
    res.end();
})

server.listen(3000,'localhost',() => {
    console.log('Kết nối tới server port: 3000')
})