//const express = require('express')
const frontendService = require('../Services/frontendService')



// Funcion por expresion
exports.readFrontendLenguajes = (req, res) =>{
    console.log("Entrando a readFrontendLenguajes en el controller.")
    //res.setHeader("Content-Type", "application/Json")
    res.status(200)
    res.json(frontendService.getAllFrontendLanguages())
    console.log("Saliendo del readFrontendLanguages en el controller")
}

exports.readFrontendLenguajesOrdered = (req,res) =>{
    let lenguajeParam = req.params.lenguaje
    let paramOrdenar = req.query.ordenar;

    const frontendFiltered = frontendService.getFrontendLanguagesFiltered(lenguajeParam, paramOrdenar)

    if(frontendFiltered.length === 0){
        return res.status(404).send(`No se encontro el lenguje: ${lenguajeParam}`)
    }

    res.status(200).json({ArrayFrontend: frontendFiltered})
}

exports.readFrontendDespedida = (req, res) => {
    res.status(200).json({saludo: "Buenas nocheees!"})
}

exports.nuevoMetodoFrontend = (req, res) =>{
    let nuevoQuery = req.query.nuevoQueryParam

    if(nuevoQuery === frontendService.getTextoSecreto()){
       return res.status(200).json({nuevoMetodo: "Accediste correctamente el codigo secreto"})
    }
    
    res.status(404).json({nuevoMetodo: "Alguno de los datos ingresados son incorrectos, revisar!"})
}

// POST---------------------------------------------------------------
exports.createFrontendLanguage = (req, res) =>{
    console.log(req)
    let lenguajeNuevo = req.body;
    console.log("createFrontendLanguage CONTROLLER - ", lenguajeNuevo)
    res.status(200).json(frontendService.createNewLanguageFrontend(lenguajeNuevo))
}

// DELETE--------------------------------------------------------------
exports.deleteFrontendLanguage = (req, res)=>{
    const id = req.params.id
    const language = frontendService.deleteFrontendLanguageService(id)

    if(language.length === 0){
        return res.status(404).send(`No se encontro el lenguaje a eliminar con el id: ${id}`)   
    }

    res.status(200).json(language)
}

// UPDATE------------------------------------------------
exports.updateFrontendLanguage = (req, res)=>{
    const id = req.params.id
    const lenguajeActualizado = req.body

    const language = frontendService.updateFrontendLanguageService(id, lenguajeActualizado)

    if(language.length === 0){
        return res.status(404).send(`No se encontro el lenguaje a eliminar con el id: ${id}`)   
    }

    res.status(200).json(language)
}