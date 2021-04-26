import fs from "fs";

export const agregarMail = async (req,res,PORT) => {
    try {
        let email = req.body.email
        let archivo = './correo.dat'
        await fs.promises.writeFile(archivo, email)
       
        res.status(200).send(`<h2 style="color:black;"> Email cargado correctamente</h2>`)
    
    } catch (error) {
        res.status(404).send(error)
    }
}

