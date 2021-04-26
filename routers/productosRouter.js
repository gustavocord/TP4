
import { Router } from "express";
import {nuevoProducto } from '../controller/productoControler.js'
import  {agregarMail} from '../controller/mailControler.js'
import  modelProducto from '../model/modelProducto.js'
const router = Router()


//rutas usuario

router.get('/', (req, res) => {
    res.render('formulario');
})

router.get('/listar',async (req, res) => {
    try {
        let productos = await modelProducto.producto.find({}).lean()
        res.render('tabla', {productos}) 
    } catch (error) {
        res.status(404).send(error)
    }
})

// metodos post
router.post("/ingreso", (req, res)=>{
    nuevoProducto(req,res)
    
})


//rutas mail

router.get('/set-correo', (req,res) => {
    res.render('mail');
})

router.post("/set-correo", (req, res)=>{
    agregarMail(req,res)
})


export default router;
