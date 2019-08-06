let empleados = [{
    id: 1,
    nombre: 'Mario'
},{
    id: 2,
    nombre: 'Melissa'
},{
    id: 3,
    nombre: 'Juan'
}];


let salarios = [{
    id: 1,
    salario : 1000
},{
    id: 2,
    salario : 2000
}];


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id);

    //console.log(empleadoDB);

    if(!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}


let getSalario = (empleado, callback) => {

    if(!empleado){
        callback(`El empleado ingresado no existe`);
    } else {
        let salarioDB = salarios.find( salario => salario.id === empleado.id);

        if(!salarioDB){
            callback(`El usuario ${empleado.nombre} no tiene salario`);
        } else {
            callback(null, {
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    }




}

getEmpleado(2, (err, empleado) => {

    if(err) {
        console.log(err);
    }


    getSalario(empleado, (err, resp) => {

        if(err) {
            console.log(err);
        }
    
        console.log(`El salario de ${ resp.nombre } es de $${ resp.salario}`);
    });

});


