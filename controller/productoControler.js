
import  modelProducto  from '../model/modelProducto.js'
import {validar} from '../validaciones/producto.js'
import sendMailResport  from "../mail.js"

//agrega nuevos productos

export const nuevoProducto= ('/ingreso', async(req,res) => {
    let producto = req.body
    
    let val = validar(producto)
    if(val.result) {
          const productoNuevo =  new modelProducto.producto(producto)
          let productos= await modelProducto.producto.find({}).lean()
          if (productos.length % 10 == 0) {
           await sendMailResport.enviarMail(productos)
           
            
        }
       
          await  productoNuevo.save(err => {
            if(err) throw new Error(`error en escritura de producto: ${err}`)
    
                res.send(" el producto   " + producto.nombre + "   se cargo correctamente" ) 
        })
    }
    else {
        res.send(val.error)
    }
})




//