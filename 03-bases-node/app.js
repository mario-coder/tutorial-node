//requireds
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 10;

//console.log(process.argv);
let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

console.log('base: ' + argv.base);
console.log('limite: ' + argv.limite);



crearArchivo(argv.base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));