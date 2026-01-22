import http from "http";
import url from "url";

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    let contentType = "text/html";

    if (q.json === "true") {
      contentType = "application/json";
    }

    res.writeHead(200, { "Content-Type": contentType });

    if (contentType === "text/html") {
      res.write("<html><body><h1>Hello, World!</h1></body></html>");
    } else {
      res.write(JSON.stringify({ message: "Hello, World!" }));
    }

    res.end();
  })
  .listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
  });
