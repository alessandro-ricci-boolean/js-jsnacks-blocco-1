let number = prompt("Inserire il numero di elementi")

let numbers = []
for(let i=0; i<number; i++){
    let num = Math.floor((Math.random) * 100) + 1);
numbers.push(num);
}
console.log(numbers);

numbers.reverse();
let new_numbers = numbers.slice(0.5);
console.log(new_numbers);