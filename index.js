const express = require ("express");
let colores = require("./datos/colores.json"); //hace automaticamente el PASE

const server = express();

console.log(colores);

server.use(express.static("../lista_colores"));

server.get("/colores", (peticion,respuesta) => {
    respuesta.json(colores);
});







server.use((peticion,respuesta) => {
    respuesta.status(404);
    respuesta.send("<h1>404 not found</h1>");
});

server.listen(process.env.PORT) || 4000;

