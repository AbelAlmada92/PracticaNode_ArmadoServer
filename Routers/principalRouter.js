const express = require('express')
const fs = require('node:fs')

const HOME = fs.readFileSync('./vistas/home.html')
const API = fs.readFileSync('./vistas/api.html')
const lenguajes = require('../src/lenguajes').infoLenguajes

const routerPrincipalAPI = express.Router()

routerPrincipalAPI.get('/home',(req, res) =>{
    console.log("Entrando en la raiz de la API")
    res.setHeader('Content-type', 'text/html')
    res.status(200).send(HOME)
})


routerPrincipalAPI.get('/',(req, res) =>{
    console.log("Entrando en la ruta del API")
      res.setHeader('Content-type', 'text/html')
    //res.setHeader('Content-type', 'text/html')
    res.status(200).send(API)
})

routerPrincipalAPI.get('/lenguajes', (req, res)=>{
    console.log("Entrando en la ruta /api/lenguajes ")
    const miJsonLenguajes = JSON.stringify(lenguajes)
    console.log(miJsonLenguajes)
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    res.send(miJsonLenguajes)
})


module.exports = routerPrincipalAPI