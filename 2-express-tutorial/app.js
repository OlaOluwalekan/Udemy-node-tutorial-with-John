const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user hit server");
  res.end("hello");
});

server.listen(5000, () => {
  console.log("server is listening on prot 5000...");
});

// console.log(server);
