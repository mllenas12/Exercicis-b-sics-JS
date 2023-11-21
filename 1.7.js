
let cadena = "Hola món";

// Exercici 1: 

let obtenirCadena = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cadena);
        }, 2000);
    });
}

// Exercici 2: 

let obtenirCadena2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cadena);
        }, 2000);
    });
}

obtenirCadena2()
    .then((cadena) => console.log(cadena));

// Exercici 3: 

let obtenirCadena3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cadena == "Hola") {
                resolve(cadena);
            }
            else {
                reject;
            }
        }, 2000);
    });
}

obtenirCadena3()
    .then((cadena) => console.log(cadena));


// Exercici 4: 

let obtenirCadena4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cadena);
        }, 2000);
    });
}

let fetchingCadena = async () => {
    let cadenaFetched = await obtenirCadena4();
    console.log(cadenaFetched);
}

// Exercici 5: 

let obtenirCadena5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cadena);
        }, 2000);
    });

}

let fetchingCadena5 = async () => {
    try {
        let cadenaFetched = await obtenirCadena5();
        console.log(cadenaFetched);
    } catch (err) {
        console.log(err);
    }
}

fetchingCadena5();

// Exercici 6: 

let prom1 = "Promesa 1";
let prom2 = "Promesa 2";

let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(prom1);
    }, 2000);
});


let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(prom2);
    }, 3000)
});


Promise.all([promesa1, promesa2])
    .then((resultats) => console.log(resultats));

 