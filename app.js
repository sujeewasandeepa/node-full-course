const http = require("http");
const fs = require("fs");

const func1 = () => {
  console.log("func1");
}
const func2 = () => {
  console.log("func2");
}
const func3 = () => {
  console.log("func3");
  func1();
  func2();
}

func3();

const PORT = 3000;

const server = http.createServer((req, res) => {
  
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("pages/home.html", 'utf8', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });

  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("pages/about.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });

    // writing data into a file
    // writeFile will replace data
  } else if (req.url === "/create-file") {
    const data = "<h1>test file!</h1>";
    fs.writeFile("temp/test.html", data, (err) => {
      if (err) throw err;
      res.write('file is created');
      res.end();
    })

  } else if (req.url === "/append-file") {
    const data = "<h1>updated test file!</h1>";
    fs.appendFile("temp/test.html", data, (err) => {
      if (err) throw err;
      res.write('File updated!');
      res.end();
    })

  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.readFile("pages/404.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT);
