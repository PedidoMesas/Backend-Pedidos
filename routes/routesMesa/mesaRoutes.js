const { Router } = require('express');
const { check } = require('express-validator');
const { getMesa} = require('../../controllers/controlMesa/mesa');

const router = Router();
 
router.get('/mostrar', getMesa);
 
router.post('/agregar');
 
router.put('/editar/:id');
 
router.delete('/eliminar/:id');
 
module.exports = router;