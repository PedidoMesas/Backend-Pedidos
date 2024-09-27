const { Router } = require('express');
const { check } = require('express-validator');
const { getCategoria} = require('../../controllers/controlCategoria/categoria');

const router = Router();
 
router.get('/mostrar', getCategoria);
 
router.post('/agregar');
 
router.put('/editar/:id');
 
router.delete('/eliminar/:id');
 
module.exports = router;