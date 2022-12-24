const http = require("node:http");
const { area } = require("./circle");

circleArea = area(5);
console.log(circleArea);

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!'
    }));
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'You are in the about page'
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Page not found!'
    }));
  }
});

server.listen(3000);
