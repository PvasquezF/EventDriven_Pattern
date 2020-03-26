const EventEmitter = require("events");
const emitter = new EventEmitter();

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static folder
app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(PORT, () => {
    console.log(`Servidor corriendo`);
});

emitter.on("clickBoton", (res) => enviarMensaje('Se emitio el evento de click en un boton.', res));
emitter.on("clickRecordar", (res) => enviarMensaje('Se emitio el evento de click sobre recordar.', res));
emitter.on("focoInput", (res) => enviarMensaje('Se emitio el evento de posicionarse sobre un input.', res));
emitter.on("eventoWriting", (res) => enviarMensaje('Se emitio el evento de escribir sobre un input.', res));

app.get('/eventoBoton', (req, res) => {
    emitter.emit("clickBoton", res);
});

app.get('/eventoInput', (req, res) => {
    emitter.emit("focoInput", res);
});
app.get('/writing', (req, res) => {
    emitter.emit("eventoWriting", res);
});

app.get('/recordar', (req, res) => {
    emitter.emit("clickRecordar", res);
});

function enviarMensaje(msg, res) {
    res.status(200).json({ result: msg });
}