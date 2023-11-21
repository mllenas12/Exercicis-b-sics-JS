// Exercici 1: 
let add = (a, b) => a + b;

// Exercici 2: 
let randomNumber = () => Math.floor(Math.random() * 100 + 1);


// Exercici 3: 

class Person {
    name;
    
    greet = () => console.log("Hola, " + this.name);
    
}


// Exercici 4: 
let printNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Exercici 5: 

setTimeout(() => console.log("Han passat 3 segons"), 3000);
