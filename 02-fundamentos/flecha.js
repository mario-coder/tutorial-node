




// function sumar(a, b){
//     return a+b;
// }

// let sumar = (a, b) => {
//     return a+b;
// }

let sumar = (a, b) => a+b;
let saludar = () => 'Hola Mundo';
let saludo = (nombre) => `Hola ${nombre}`;

console.log(sumar(10,20));
console.log(saludar());
console.log(saludo('mario'));


let deadpool = {
    nombre  : 'Wade', 
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};


console.log(deadpool.getNombre());

