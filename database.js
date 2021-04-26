import mongoose from "mongoose";

( async () => {
    try {

        const db = await mongoose.connect('mongodb+srv://cordobagust:hola1037@cluster0.09ztk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            console.log('Base de datos conectada!');
        } catch (error) {
            console.error(error);
          }
        })() 

  