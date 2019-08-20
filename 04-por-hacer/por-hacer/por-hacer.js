const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if(err) 
            throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    //console.log(listadoPorHacer);
}

const getListado = () => {
    
    cargarDB();

    return listadoPorHacer;
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    };

    //if(!listadoPorHacer.includes(porHacer)){
        listadoPorHacer.push(porHacer);
    //}
    guardarDB();

    return porHacer;
}


module.exports = {
    crear,
    getListado
}