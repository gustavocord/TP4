import mongoose from "mongoose";

( async () => {
    try {

        const db = await mongoose.connect('mongodb://localhost/producto', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            console.log('Base de datos conectada!');
        } catch (error) {
            console.error(error);
          }
        })() 

  