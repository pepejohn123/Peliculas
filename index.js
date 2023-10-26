const express = require('express');
const mongoose = require('mongoose');


const routes = require('./routes/index'); //directorio, busca el que se llame index primero

const app = express();
app.get('',(req, res) /* importa el orden */ =>{
    res.send("aquí estoy")
    console.log("queeeeeeeeeeeee");
})



app.use('', routes);


const mongoUrl = 'mongodb+srv://josejdiaz:1@cluster0.xpjr6lo.mongodb.net/movies?retryWrites=true&w=majority';

mongoose.connect(mongoUrl).then(client =>{
    app.listen(3000,() =>{
        console.log('kiubolas.....');
    });

}).catch(err=>{
    console.log('No se pudo conectar a la base de datos',err);
  
})

    


