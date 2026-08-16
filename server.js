const http = require("http");

http.createServer((req, res) => {
  res.writeHead(301, {
    Location: "https://sukucadang.galau-terus.workers.dev/"
  });
  res.end();
}).listen(process.env.PORT || 8080, "0.0.0.0");
