const router = require('express').Router();


const authMiddleware = require('../src/middlewares/auth');


const moviesController = require('../src/controllers/movies');

router.use('/movies',authMiddleware);

router.get('/movies', moviesController.listar);


router.get('/movies/:id', moviesController.ver); /* la lee después de new, si estuviera invertido el orden, la leería como un id=new */


router.put('/movies/:id', moviesController.editar); /* la lee primero */
module.exports = router; /* se pone al final pa que esté todo definido cuando se llame */