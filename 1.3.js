// Exercici 1: 

let processar = (num, callBack) => callBack(num);

// Exercici 2: 

let calculadora = (num1, num2, callBack) => callBackSum(num1, num2);
callBackSum = (num1, num2) => num1 + num2;
calculadora(3, 2, callBackSum);

// Exercici 3: 

let esperarISaludar = (nom, callback) => setTimeout(() => callback(nom), 2000);

let callback = nom => console.log(`Hola ${nom}!`);

esperarISaludar("Pol", callback);

// Exercici 4: 

let processarElements = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i]);
    }
}

callBack = num => {
    console.log(num);
}

// Exercici 5: 

let processarCadena = (cadena, callBack) => {
    let cadenaTransf = cadena.toUpperCase();
    callBack(cadenaTransf);
};

let imprimirCadena = cadena => console.log(cadena);

let newCadena = "Hola que tal";
processarCadena(newCadena, imprimirCadena);