const Movie = require('../models/movie');

class MoviesController{
    listar(req,res){
        Movie.find().then(response=>{
            console.log('Respuesta: ',response);
            res.send(response);
        }).catch(e=>{
            res.sendStatus(500);
            console.log('Error:',e);
        });
    }

    crear(req,res){
        Movie.create().then(createdMovie => {
            console.log('Movie created:', createdMovie);
            res.send(createdMovie);

        })
        .catch(error => {
            console.error('Error creating movie:', error);
        });
    }

    editar(req,res){
        res.send(usuarios[0]);
    }
    
    eliminar(req,res){
        res.send(usuarios[0]);
    }

    ver(req,res){
        const id = req.params.id; // Convert to number
        const usuario = ids[id];
        if(usuario){
            res.send(usuario);
        }
        else{
            res.sendStatus(404);
        }
    }
}


module.exports = new MoviesController(); //exportar instancia