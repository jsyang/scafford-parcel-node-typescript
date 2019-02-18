const http = require('http');

const server = http.createServer((req, res) => {
    console.log('A node app is running!');
    res.end('A node app is running!');
});

const PORT = 3000;

server.listen(PORT, e => {
    if (e) {
        throw e;
    } else {
        console.log(`Server is listening on port ${PORT}!!!`);
    }
});