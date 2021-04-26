import fs from "fs";

 const  setArchivo = async () => {
    try {
        let archivoEmail = './correo.dat'
        let archivo = fs.existsSync(archivoEmail)
        if (!archivo) {
            let email = 'cordobabagustavoj@gmail.com'
            await fs.promises.writeFile(archivoEmail, email) 
        }
    } catch (error) {
        console.log("No existe el archivo", error);
    }
}



export default {setArchivo}