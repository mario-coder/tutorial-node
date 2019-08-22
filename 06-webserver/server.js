const express = require('express');
const app = express();
 
app.use(express.static( __dirname + '/public'));

/*
app.get('/', (req, res) => {
  //res.send('Hola Mundo');

  let salida = {
    nombre: 'mario',
    edad: '39',
    url: req.url
  };

  res.send(salida);
});
*/

app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080');
});