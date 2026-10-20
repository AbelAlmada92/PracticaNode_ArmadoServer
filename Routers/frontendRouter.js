const express = require('express')
const lenguajes = require('../src/lenguajes').infoLenguajes

const routerFrontend = express.Router()


routerFrontend.get('/',(req, res) =>{
    console.log("Entrando a la ruta /api/lenguaje/frontend")
    res.json(lenguaje.frontend)
   /* console.log("Entrando en la raiz del API")
    res.setHeader('Content-type', 'text/html')
    res.status(200).send(HOME)*/
})


routerFrontend.get('/:lenguaje', (req,res)=>{
    let lenguajeParam = req.params.lenguaje
    const filtrado = lenguajes.frontend.filter(
        lenguajes => lenguajes.nombre.toLocaleLowerCase == lenguajeParam.toLocaleLowerCase
    )
    if(filtrado.length === 0){
        return res.status(404).send(`No se encontro el lenguaje frontend ${lenguajeParam}`)
    }
    res.status(200).json(filtrado)
})

module.exports = routerFrontend