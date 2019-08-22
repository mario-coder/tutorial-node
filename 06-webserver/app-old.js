const http = require('http');



http.createServer( (req, res ) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'mario',
        edad: '39',
        url: req.url
    }

    res.write(JSON.stringify(salida));
    //res.write('Hola mundo');
    res.end();

})
.listen(8080);



console.log('Escuchando el puerto 8080');