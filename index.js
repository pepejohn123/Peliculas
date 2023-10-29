const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
/* const cors = require('cors'); //si no vienen de donde mismo */

const routes = require('./routes/index'); //directorio, busca el que se llame index primero

const app = express();

app.get('',(req, res) /* importa el orden */ =>{
    res.sendFile(path.join(__dirname,'public','index.html'))
    console.log("Hubo un get a localhost");
})

app.use('/assets',express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('', routes); /* apartir de localhost:3000 */

/* app.use(cors()); //por si se ocupa */

const mongoUrl = 'mongodb+srv://josejdiaz:1@cluster0.xpjr6lo.mongodb.net/movies?retryWrites=true&w=majority';


mongoose.connect(mongoUrl).then(client =>{
    app.listen(3000,() =>{ //CONECTARSE AL PUERTO 3000
        console.log('App is running.....');
    });

}).catch(err=>{
    console.log('No se pudo conectar a la base de datos',err);
  
})

    


