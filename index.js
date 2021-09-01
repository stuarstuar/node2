
const http = require('http')
const url = require('url')
const fs = require('fs')
const chalk = require('chalk')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')


// console.log(chalk.white.bgRed.bold(('Hola Mundo!')))
// console.log(uuidv4())

const consulta = {
    fecha: moment().add(35000, 'days').format('MMM Do YYYY'),
    ID: uuidv4(),
    }

console.log(consulta)
    




/*http
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

