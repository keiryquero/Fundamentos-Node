// se crea un servidor con el modulo HTTP
// se instala nodemon a traves de npm para poder reiniciar automaticamente nuestro servidor
const http = require('http');
const server = http.createServer((req, res)=>{
     res.end('servidor con node.js V.3')
})
const puerto = 3000;

server.listen(puerto, () => {
    console.log ('Escuchando...')
})
