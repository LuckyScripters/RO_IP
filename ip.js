import http from "http"
import fetch from "node-fetch"

function handleRequest(request, response) {
  if (request.method === "GET" && request.url === "/") {
    fetch("https://www.roblox.com/my/settings/json", {
      method : "GET"
    })
     .then((data) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.write(data);
        response.end();
    })
  }
}

const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
