const http = require("http");

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/users":
      switch (request.method) {
        case "GET":
          response.write("Listar usuarios");
          break;
        case "POST":
          response.write("Cadastrar usuario");
          break;
      }

      break;
    case "/":
      response.write("Node Server!");
      break;

    default:
      response.write("Not found page");
      break;
  }

  console.log("url", request.url);
  console.log("method", request.method);

  response.end();
});

server.listen(3000);
