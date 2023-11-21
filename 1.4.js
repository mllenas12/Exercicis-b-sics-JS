// Exercici 1:

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2];
console.log(array3);

// Exercici 2:

let suma = (num1, num2, ...x) => {
    let resultat = num1 + num2;

    x.forEach(n => resultat += n);

    return resultat;
}
// Exercici 3:

let Objecte1 = {
    name: "Paula",
    nacionalitat: "Francesa",
    edat: 25,
}

let Objecte2 = {
    ...Objecte1,
    name: "Frank",
};

console.log(Objecte1);
console.log(Objecte2);

// Exercici 4: 

let arrayFruites = ["poma", "taronja", "pera", "plàtan", "tomàquet"];
let [fruita1, fruita2, ...fruites] = arrayFruites;
console.log(fruita1);
console.log(fruita2);
console.log(fruites);

// Exercici 5: 

let funcio3arg = (a, b, c) => console.log(a + b + c);

let array = ["cadira ", "taula ", "porta"];

funcio3arg(...array);

// Exercici 6: 

let ObjecteNum1 = {
    nom: "Albert"
};

let ObjecteNum2 = {
    edat: 32
};

let objecteFusionat = {
    ...ObjecteNum1,
    ...ObjecteNum2,
}

console.log(objecteFusionat);

