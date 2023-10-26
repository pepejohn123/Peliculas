const router = require('express').Router();


const authMiddleware = require('../src/middlewares/auth');


const moviesController = require('../src/controllers/movies');

/* router.use('/movies',authMiddleware); */

router.get('/movies/getmovies', moviesController.listar);

router.post('/movies/new', moviesController.crear); /* la lee primero */
module.exports = router; /* se pone al final pa que esté todo definido cuando se llame */