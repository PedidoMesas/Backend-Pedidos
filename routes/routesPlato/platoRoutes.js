const { Router } = require('express');
const { check } = require('express-validator');
const { getPlato } = require('../../controllers/controlPlato/plato');

const router = Router();
 
router.get('/mostrar', getPlato);
 
router.post('/agregar');
 
router.put('/editar/:id');
 
router.delete('/eliminar/:id');
 
module.exports = router;