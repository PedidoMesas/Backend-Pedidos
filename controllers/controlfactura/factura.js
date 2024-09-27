const { response, request } = require('express');
const sql = require('msnodesqlv8');
var config = require("../../database/db")

const getFactura = async (req = request, res = response) => {
    sql.query(config, "select * from Factura", (err, rows) => {
        res.json({
            msg: 'getFactura Api - Controlador Roles',rows
        });
    });
}

module.exports = {
    getFactura,
 }