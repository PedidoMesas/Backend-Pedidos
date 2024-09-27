const { response, request } = require('express');
const sql = require('msnodesqlv8');
var config = require("../../database/db")

const getPedido = async (req = request, res = response) => {
    sql.query(config, "select * from Pedido", (err, rows) => {
        res.json({
            msg: 'getPedido Api - Controlador Roles',rows
        });
    });
}

module.exports = {
    getPedido,
 }