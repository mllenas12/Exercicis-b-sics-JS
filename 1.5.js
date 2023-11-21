let array = [1, 2, 3, 4];

// Exercici 1: 

let arrayQuadrat = array.map(num => num * num);

// Exercici 2: 

let parells = array.filter(n => n % 2 == 0);

// Exercici 3: 

let array3 = [1, 10, 8, 11];
let primerMajor10 = array3.find(n => n > 10);

// Exercici 4: 

let array4 = [13, 7, 8, 21];
let sumaArray = array4.reduce((acumulat, total) => acumulat + total, 0);

// Exercici 5: 

let array5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
let multiFuncio = array5.filter(n => n >= 10).map(n => n * 2).reduce((acumulat, total) => acumulat + total, 0);

// Exercici 6: 

let array6 = [11, 12, 13, 14];

let everyArray = array6.every(n => n > 10);
console.log(`És ${everyArray} que tots els elements són majors a 10`);

let someArray = array6.some(n => n > 10);
console.log(`És ${someArray} que algun dels elements és major a 10`);
