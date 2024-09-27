const { response, request } = require('express');
const sql = require('msnodesqlv8');
var config = require("../../database/db")

const getDescuento = async (req = request, res = response) => {
    sql.query(config, "select * from Descuento", (err, rows) => {
        res.json({
            msg: 'getDescuento Api - Controlador Roles',rows
        });
    });
}

module.exports = {
    getDescuento,
 }