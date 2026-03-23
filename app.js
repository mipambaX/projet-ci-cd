const http = require("http");

const server = http.createServer((req, res) => {
  res.end("CI/CD Docker fonctionne !");
});

server.listen(3000);
