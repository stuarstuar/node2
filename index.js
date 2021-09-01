
const http = require('http')
const url = require('url')
const fs = require('fs')
const chalk = require('chalk')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')
const _ = require('lodash')


// console.log(chalk.white.bgRed.bold((consulta)))
// console.log(uuidv4())

/*const consulta = {
    fecha: moment().add(35000, 'days').format('MMM Do YYYY'),
    ID: uuidv4(),
    }

console.log(chalk.white.bgRed.bold((`${consulta}`)))*/


/*const numeros = [true, 0, null, undefined, '', 22, false];
console.log(_.partition(numeros, (n) => n == true || n == false))*/

/*
http
    .createServer(function (req, res) {
       
        const params = url.parse(req.url, true).query

        //create
        const archivo = params.archivo
        const contenido = params.contenido
        
        //leer
        const newnombre = params.nuevoNombre
       
        if (req.url.includes('/crear')) {
            fs.writeFile(archivo, contenido, () => {
                res.write('Archivo creado con éxito!')
                res.end()
            })
        }
     
        if (req.url.includes('/leer')) {
            fs.readFile(archivo, (err, data) => {
                res.write(data)
                res.end()
            })
        }
        
        if (req.url.includes('/renombrar')) {
            fs.rename(archivo, newnombre, (err, data) => {
                res.write(`Archivo ${archivo} renombrado por ${newnombre}`)
                res.end()
            })
        }

        if (req.url.includes('/eliminar')) {
            fs.unlink(archivo, (err, data) => {
                res.write(`Archivo ${archivo} eliminado con éxito`)
                res.end()
         })
        }
    })
    .listen(8080, () => console.log('Escuchando el puerto 8080'))

*/


const axios = require("axios");

axios
    .get("https://rickandmortyapi.com/api/character/1")
    .then((data) => {

        const name = data.data.name;
        console.log(name);
    })

    .catch((e) => {
        console.log(e);
    });