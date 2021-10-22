const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('reqest made');
    console.log('writing back response');
    res.setHeader('Content-Type','text/html');
    res.write('<h1>hey</h1>hi shravani');
    res.end();
})
server.listen(3000,()=>{
    console.log('server is listening for requests');
})