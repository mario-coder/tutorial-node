//requireds

const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 10;

//console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];

console.log(base);



crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
