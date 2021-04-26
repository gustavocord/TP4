import Joi from '@hapi/joi'


export const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().required(),
        descripcion: Joi.string().required(),
        precio : Joi.number().required(),
        url : Joi.string().required()
    })

    const { error } = productoSchema.validate(producto)
    if(error) {
        return { result: false, error }
    }
    else {
        return { result: true }
    }
}


