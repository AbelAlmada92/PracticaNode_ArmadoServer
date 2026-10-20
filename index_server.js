const express = require('express')

const HOSTNAME = '127.0.0.1';
const PORT = 3000

const routerFrontend = require('./Routers/frontendRouter')
const routerBackend = require ('./Routers/backendRouter') 
const routerPrincipalAPI = require('./Routers/principalRouter')

const app = express()

// Routers:

app.use('api/lenguajes/frontend', routerFrontend)
app.use('api/lenguajes/backend', routerBackend)
app.use('/api', routerPrincipalAPI)


app.listen(PORT, HOSTNAME, () =>{
    console.log(`El servidor esta corriendo en http://${HOSTNAME}:${PORT}`)
})