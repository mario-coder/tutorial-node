//import { url } from "inspector";

//====================
// Puerto
//====================
process.env.PORT = process.env.PORT || 3000;


//====================
// Entorno
//====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//====================
// Base de datos
//====================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    //mlab - string de conexion
    urlDB = 'mongodb://<dbuser>:<dbpassword>@ds213209.mlab.com:13209/cafe';
}

process.env.URLDB = urlDB;