const { Router } = require('express');
const { check } = require('express-validator');
const { getDescuento} = require('../../controllers/controlDescuento/descuento');

const router = Router();
 
router.get('/mostrar', getDescuento);
 
router.post('/agregar');
 
router.put('/editar/:id');
 
router.delete('/eliminar/:id');
 
module.exports = router;