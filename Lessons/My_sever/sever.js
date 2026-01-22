import http from "http";
http
  .createServer((request, response) => {
    response.write("hey brother we made it ");
    response.end();
  })
  .listen(8080);

console.log("Server started on port 3000");
