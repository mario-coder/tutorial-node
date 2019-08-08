/**
 * Async Await
 */


// let getNombre = async() => {

//     //undefined.nombre;
//     throw new Error('No existe el nombre');

//     return 'Mario';
// }


let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Mario');
        }, 3000);

    });
}


let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${nombre}`;
}


// getNombre().then(nombre => {
//     console.log(getNombre());
// }).catch( e => {
//     console.log('Error de Async', e);
// });


saludo().then(mensaje => {
    console.log(mensaje);
});