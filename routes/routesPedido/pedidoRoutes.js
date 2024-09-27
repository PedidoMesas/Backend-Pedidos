const { Router } = require('express');
const { check } = require('express-validator');
const { getPedido } = require('../../controllers/controlPedido/pedido');

const router = Router();
 
router.get('/mostrar', getPedido);
 
router.post('/agregar');
 
router.put('/editar/:id');
 
router.delete('/eliminar/:id');
 
module.exports = router;