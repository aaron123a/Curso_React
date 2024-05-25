

const persona = {
    nombre:'Aaron',
    apellido: 'Ortega',
    edad: 19,
    direccion:{
        ciudad:'Lima',
        CodPostal: 15058,
        lat: 177.9544,
        lng: 4773.4771,
    }
}

/* console.table(persona); */


const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2)