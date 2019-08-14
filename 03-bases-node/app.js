//requireds
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){

    case 'listar':
        console.log('Listar');

        listarTabla(argv.base, argv.limite)
            .then(data => console.log(`Tabla desplegada:\n${data}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        console.log('Crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}



//let base = 10;

//console.log(process.argv);
let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

console.log('base: ' + argv.base);
console.log('limite: ' + argv.limite);


