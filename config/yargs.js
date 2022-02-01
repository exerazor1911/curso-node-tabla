const { number, boolean } = require('yargs');
const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        } else if (argv.h <= 0) {
            throw 'La extension debe ser mayor a 0'
        } 

        return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'es la extension de la tabla'
    })
   
    .argv


    module.exports = argv