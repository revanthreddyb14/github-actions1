
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("🚀 App deployed using GitHub Actions CI/CD!");
});

server.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});

