// generar un servidor con Express
// llamadas al servidor y responder 
// llamar nuestra carpeta que tiene todos nuestros archivos estáticos
const express = require ('express');
const app = express();
const puerto = 3000;
app.get("/", (req, res) => {
    res.send("hola Mundo!!")
});
app.get("/servicios", (req, res) => {
    res.send ("ruta de servicios");
})

app.listen(puerto, () =>{
    console.log(`ejemplo de escucha de app listen al puerto:${puerto}`);
})
