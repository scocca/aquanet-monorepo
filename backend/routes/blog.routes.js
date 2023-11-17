const { crearRegion, getUserById } = require('../controllers/blog.controller');

const routerBlog = require('express').Router();

routerBlog.post('/Blog', crearRegion);

routerBlog.get('/Blog/:region', getUserById)

module.exports = routerBlog;