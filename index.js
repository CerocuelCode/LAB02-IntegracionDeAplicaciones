const express = require('express');
const port = 3500;
const app = express();

app.get('/',(req, res)=>{
    res.sendFile('./static/index.html',{
        root: __dirname
    });
})

app.get('/acercade',(req, res)=>{
    res.sendFile('./static/about.html',{
        root: __dirname
    })
})

app.get('/contact',(req, res)=>{
    res.sendFile('./static/contact.html',{
        root: __dirname
    })
})

app.use((req, res)=>{
    res.status(404).send('No se encontro la pagina solicitada');
})

app.listen(port);
console.log(`Servidor iniciado en el puerto: ${port} http://localhost:${port}`);