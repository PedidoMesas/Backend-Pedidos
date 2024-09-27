const { Router } = require('express');
const { check } = require('express-validator');
const { getDescuento, getFactura} = require('../../controllers/controlfactura/factura');
 
const router = Router();
 
router.get('/mostrar', getFactura );
 
router.post('/agregar');
 
router.put('/editar/:id');
 
router.delete('/eliminar/:id');
 
module.exports = router;