const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Welcome to our home page</h1>");
  } else if (req.url == "/about") {
    res.end(`<a href="/">Our about page</a>`);
  } else {
    res.end(`<h1 style="color:red">Oops! Page not found</h1>`);
  }
});

server.listen(2005);
