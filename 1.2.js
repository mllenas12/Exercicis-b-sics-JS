// Exercici 1:

let potConduir = (edat) => edat >= 18 ? "Pots conduir" : "No pots conduir";

// Exercici 2: 

let numGran = (num1, num2) => num1 > num2 ? `${num1} és més gran` : `${num2} és més gran`;

// Exercici 3: 

let esPositiu = num => num > 0 ? "És positiu" : num === 0 ? "És zero" : "És negatiu";

let trobarMaxim = (a, b, c) => a > b && a > c ? `${a} és el nombre màxim` : b > c ? `${b} és el nombre màxim` : `${c} és el nombre màxim`;

// Exercici 4: 

let parOImpar = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? console.log(`${arr[i]} és parell`) : console.log(`${arr[i]} és parell`);
    }
}