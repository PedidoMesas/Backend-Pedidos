const { response, request } = require('express');
const sql = require('msnodesqlv8');
var config = require("../../database/db")

const getMesa = async (req = request, res = response) => {
    sql.query(config, "select * from Mesa", (err, rows) => {
        res.json({
            msg: 'getMesa Api - Controlador Roles',rows
        });
    });
}

module.exports = {
    getMesa,
 }