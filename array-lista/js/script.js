const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

fruits.push("pesca");

let flag = false;

for(let i=0; i<fruits.length; i++){
    if(fruits[i] == "cocomero"){
        flag = true;
    }
}

if(flag == true){
    console.log("Trovato! Devo solo preparare il cocktail.");
}
else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}

