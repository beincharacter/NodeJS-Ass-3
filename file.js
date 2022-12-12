const fs = require('fs');
const http = require('http');

fs.writeFile('index.html', '<h1> Hello World! </h1> \n<p> This is Shubham Pal here... </p>', (err) => {
    if(err) console.log(err);
    console.log('File is created')
})

const server = http.createServer((req, res) => {

    const rstream = fs.createReadStream('index.html', 'utf-8');

    rstream.pipe(res);
    // rstream.on('end', (err) => {
    //     console.log('server closed')
    // })
});

// server.on('request', (req, res) => {

//     const rstream = fs.createReadStream('index.html', 'utf-8');

//     rstream.pipe(res);
//     // rstream.on('end', (err) => {
//     //     console.log('server closed')
//     // })
// })

server.listen(5000, ()=> console.log('server is Up'))