const express = require('express');
const Usuario = require('../models/usuario-model');

const app = express();


//METODOS HTTP
//obtener registros
app.get('/usuario', (req, res) => {
    res.send('get Usuario');
});

//crear registro
app.post('/usuario', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });



/*
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
*/

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



module.exports = app;