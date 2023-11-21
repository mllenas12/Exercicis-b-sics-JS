let noms = ['Anna', 'Bernat', 'Clara'];

let numeros = [1, 2, 3, 4, 5, 6];

// Exercici 1: 

noms.forEach(nom => console.log(nom));

// Exercici 2: 

for (n of noms) {
    console.log(n);
}

// Exercici 3: 

let parells = numeros.filter(n => n % 2 == 0);

// Exercici 4: 

let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };

for (let property in obj) {
    console.log(`${property}: ${obj[property]}`)
};

// Exercici 5: 

for (n of numeros) {
    if (n == 5) {
        break;
    }
    console.log(n);
}

// Exercici 6: 

for (n of noms) {
    console.log(`${n} -> ${noms.indexOf(n)}`);

}
