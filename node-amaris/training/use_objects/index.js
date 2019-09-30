let person = {
    name: 'Mario',
    lastName: 'Bonilla',
    age: '39',
    currentDate: new Date(),
    getName: function(){
        return this.name
    },
    setName: function(name) {
        this.name = name
        return this
    },
}

let person2 = person

console.log(person)

console.log(person.setName('XYZ').getName())
console.log(person.setName('X').getName())

//Clonacion de objetos
let {...person3} = person

//Desestructuracion
let {name, lastName} = person
