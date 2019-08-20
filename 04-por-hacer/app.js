const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];



switch (comando) {
    case 'crear':
        //console.log('Crear tarea por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        //console.log('Muestra todas las tareas por hacer');
        let listado = porHacer.getListado();

        for(let tarea of listado) {
            console.log('=======Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================'.green);
        }
        break;

    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}