const { Router } = require('express');
const { check } = require('express-validator');
const { getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../../controllers/controlUsuario/usuario');

const router = Router();
 
router.get('/mostrar', getUsuario);
 
router.post('/agregar');
 
router.put('/editar/:id');
 
router.delete('/eliminar/:id');
 
module.exports = router;