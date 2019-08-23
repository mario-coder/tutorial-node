const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
app.set('view engine', 'hbs');

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

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Mario',
        anio: new Date().getFullYear()
    });
});


app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 8080');
});