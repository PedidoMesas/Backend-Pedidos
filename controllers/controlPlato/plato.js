const { response, request } = require('express');
const sql = require('msnodesqlv8');
var config = require("../../database/db")

const getPlato = async (req = request, res = response) => {
    sql.query(config, "select * from Plato", (err, rows) => {
        res.json({
            msg: 'getPlato Api - Controlador Roles',rows
        });
    });
}

module.exports = {
    getPlato,
 }