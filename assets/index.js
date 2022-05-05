// 1. El registro de los usuarios debe hacerse con la API Random User usando axios para
// consultar la data.
// Paso 1
const axios = require("axios");
// Paso 2
axios
    .get("https://randomuser.me/api/")
    .then((data) => {
        // Paso 3
        const name = data.data.name;
        console.log(name);
    })
    // Paso 4
    .catch((e) => {
        console.log(e);
    });

// 2. Cada usuario registrado debe tener un campo id único generado por el paquete
// UUID para que ninguno de los identificadores se repita
// const { v4: uuidv4 } = require('uuid')
// console.log(uuidv4())
// // //método splice o el slice para tomar solo una parte de estos
// console.log(uuidv4().slice(0, 6))

// 3. Cada usuario debe tener un campo timestamp almacenando la fecha de registro
// obtenida por medio del paquete Moment.

// // Paso 1
// const dateFns = require('date-fns')
// // Paso 2
// console.log(dateFns())

// 4. Por cada consulta realizada al servidor, se debe devolver al cliente una lista con los
// datos de todos los usuarios registrados usando Lodash para recorrer el arreglo de
// usuarios.

// // Paso 1
// const _ = require('lodash')
// // Paso 2
// const numeros = [1, 2, 3, 4, 5, 6]
// // Paso 3
// console.log(_.partition(numeros, (n) => n % 2))

// 5. En cada consulta también se debe imprimir por la consola del servidor la misma lista
// de usuarios pero con fondo blanco y color de texto azul usando el paquete Chalk. (recordar hacer algo en el module)

// Para versiones más recientes se debe importar chalk de la siguiente forma:
// import chalk from 'chalk';
// // Paso 2
// console.log(chalk.blue.bgRed.bold('Hola Mundo!'))

// 6. El servidor debe ser levantado con el comando Nodemon.
