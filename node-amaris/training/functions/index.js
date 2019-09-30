const sum = function(numbers){
    return numbers.reduce(function(suma, num){
        return suma + num
    }, 0)
}

const sum_arrow = (...numbers) => numbers.reduce((suma, num) => suma + num, 0)
const sum_arrow2 = (callback, ...numbers) => { 
    callback()
    return numbers.reduce((suma, num) => suma + num, 0) 
}


const arr = function(numbers){
    return numbers.reduce(function(a, num){
        a.push({number: num})
        return a
    }, [])
}

console.log(sum([2, 8, 60, 20, 47, 20.5]));
console.log(sum_arrow([2, 8, 60, 20, 47, 20.5]));
console.log(sum_arrow2(function(){
    console.log('!!!This is a callback!!!');
},2, 8, 60, 20, 47, 20.5));
console.log(arr([2, 8, 60, 20, 47, 20.5]));