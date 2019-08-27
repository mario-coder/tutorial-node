require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//METODOS HTTP

//obtener registros
app.get('/usuario', (req, res) => {
    res.send('get Usuario');
});

//crear registro
app.post('/usuario', (req, res) => {

    let body = req.body;

    if(body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            body
        });
    }


});

// actualizar registro
app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});


// borrar registro
app.delete('/usuario', (req, res) => {
    res.send('delete Usuario');
});


app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});