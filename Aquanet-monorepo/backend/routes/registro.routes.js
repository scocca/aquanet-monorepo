const { crearRegion, getUserByRegion } = require('../controllers/blog.controller');

const router = require('express').Router();

// Crear regiones.
router.post('/Blog', crearRegion);

// Buscar regiones por id:name
router.get('/Blog/:region', getUserByRegion)

module.exports = router;