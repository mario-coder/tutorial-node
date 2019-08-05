
// setTimeout( () =>  {
//     console.log('Hola mundo');
// }, 3000);


let getUsarioById = (id, callback) => {

    let usuario = {
        nombre: 'mario',
        id
    }

    if(id === 20){
        callback(`El usuario con id ${id} no existe en la BD`);
    } else {
        callback(null, usuario);
    }
}

getUsarioById(10, (err, usuario) => {

    if(err){
        return console.log(err);
    }

    console.log('Usuario de BD', usuario);
});


