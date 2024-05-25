

const nombre = 'Aaron';
const apellido = 'Ortega';

const nombrecompleto = `${nombre} ${apellido} ${1+1}`;

console.log(nombrecompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);