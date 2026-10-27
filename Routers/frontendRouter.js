const express = require('express')
const frontendController = require('../Controllers/frontendController')

const routerFrontend = express.Router()

routerFrontend.use(express.json());


routerFrontend.get('/',(req, res) =>{
    console.log("Entrando a la ruta /api/lenguaje/frontend - Desde el router")
    frontendController.readFrontendLenguajes(req,res)
})

//Post------------------------------------

routerFrontend.post('/', (req, res) =>{
    console.log("Entrando en la ruta /api/lenguages/frontend - Desde el router")
    frontendController.createFrontendLanguage(req, res)
})
//--------------------------------


routerFrontend.get('/despedida',(req, res) =>{
    frontendController.readFrontendDespedida(req, res)
})

//------------------------------------------------------

routerFrontend.get('/nuevometodo', (req, res)=>{
    frontendController.nuevoMetodoFrontend(req, res)
})

// URL param
routerFrontend.get('/:lenguaje', (req,res)=>{
    frontendController.readFrontendLenguajesOrdered(req, res)
})

routerFrontend.delete("/:id/", frontendController.deleteFrontendLanguage)
routerFrontend.put("/:id/", frontendController.updateFrontendLanguage)


module.exports = routerFrontend



