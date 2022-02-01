const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors')

console.clear()


crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo))
    .catch(err => console.log(err))