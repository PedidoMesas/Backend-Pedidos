const { response, request } = require('express');
const sql = require('msnodesqlv8');
var config = require("../../database/db")

const getUsuario = async (req = request, res = response) => {
   sql.query(config, "select * from Usuario", (err, rows) => {
      res.json({
          msg: 'getUsuario Api - Controlador Roles',rows
      });
    });
}


const postUsuario = async (req = request, res = response) => {
   

   res.status(201).json();

}


const putUsuario = async (req = request, res = response) => {
   const { id } = req.params;


   res.status(201).json({msg: 'Rol Editado: ' ,rolEditado});
}

const deleteUsuario = async (req = request, res = response) => {
   const { id } = req.params;


   res.status(201).json({msg: 'Rol borrado: ' });
}

module.exports = {
   getUsuario,
   postUsuario,
   putUsuario,
   deleteUsuario
}