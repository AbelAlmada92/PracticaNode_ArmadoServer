const frontend = require('../src/lenguajes').infoLenguajes.frontend

exports.getAllFrontendLanguagesRepository = () =>{
    console.log("Ingresando al repository...")
    let frontendArray = frontend
    console.log("Saliendo del repository despues de consultar los datos.")
    return frontendArray
}

exports.getTextoSecretoDB = () =>{
    console.log("Pidiendo los textos a la base de datos...")
    return "TextoSecreto"
}

exports.createNewFrontendLanguageRepository = (language) =>{
    console.log("createNewLanguageRepository - recibido: ", language)
    frontend.push(language)
    return frontend
}

exports.deleteFrontendLanguageRepository = (id) =>{
    console.log("deleteFrontendLanguageRepository - id: ",id)
    const indice = frontend.findIndex(lenguaje => lenguaje.id == id)

    if (indice >= 0){
        frontend.splice(indice, 1)
        return frontend
    }else{
        return []
    }
}

exports.updateFrontendLanguageRepository = (id, languageUpdated) =>{
    console.log("deleteFrontendLanguageRepository - id: ",id)
    const indice = frontend.findIndex(lenguaje => lenguaje.id == id)

    if (indice >= 0){
        frontend[indice] = languageUpdated
        return frontend
    }else{
        return []
    }
}