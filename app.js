const http = require("node:http");
const { area } = require("./circle");

circleArea = area(5);
console.log(circleArea);

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end(JSON.stringify({
    //   data: 'Hello World!'
    // }));
    res.write("<h1>Home</h1>")
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>About</h1>")
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write("<h1>Page not found!</h1>");
    res.end();
  }
});

server.listen(3000);
