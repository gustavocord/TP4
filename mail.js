import nodemailer from "nodemailer";
import fs from "fs";






 const enviarMail = async (productos) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'node.gustavo@gmail.com',
            pass: 'nodecurso'
        }
    })


    let archivoEmail = './correo.dat'
    let email = await fs.promises.readFile(archivoEmail, 'utf-8')
  
    let msj = ''
    for (let i = 0; i < productos.length; i++) {
        
        msj += `<div >`;     
        msj += '<span style = "color: blue">NOMBRE: </span>'  + productos[i].nombre
        msj += '<br>'
        msj += '<span style = "color: blue">PRECIO: </span>' + productos[i].precio
        msj += '<br>'
        msj += '<span style = "color: blue">DESCRIPCION: </span>' + productos[i].descripcion
        msj += '<br>'
        msj += '<span style = "color: blue">DESCRIPCION: </span>' + productos[i].url
        msj += '<br>'
        msj += `<br><br>`;
        msj += `</div>`;
    }
    

    const mailOptions = {
        from: 'node.gustavo@gmail.com',
        to: 'cordobagustavoj@gmail.com',
        subject: 'lista de productos',
        html: msj

    }
    

transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err)
            return err
        }
        console.log(info)
        })
}

export default {enviarMail}