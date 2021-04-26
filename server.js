import express from 'express'
import handlebars from 'express-handlebars'
import "./database.js";
import   archivo from "./archivo.js";
import routers from './routers/productosRouter.js';



/* ------------ INSTANCIA 1 DE SERVIDOR --------------- */
 const app = express()
app.engine('hbs', handlebars({extname:'.hbs', defaultLayout: 'main.hbs'  , partialsDir: ['./views/partials']}) )
app.set('views', './views')
// archivos estaticos
app.use(express.static('public'))
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
//routes
app.use(routers)



    /* ----------- sever------------------ */
    
    const PORT = process.env.PORT || 8080
    const server = app.listen(PORT, () => {
        
        archivo.setArchivo()
        console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
    })
    server.on('error', error => console.log(`Error en Servidor: ${error}`))


