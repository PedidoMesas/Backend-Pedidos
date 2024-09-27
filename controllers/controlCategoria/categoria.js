const { response, request } = require('express');
const sql = require('msnodesqlv8');
var config = require("../../database/db")

const getCategoria = async (req = request, res = response) => {
   sql.query(config, "select * from Categoria", (err, rows) => {
      res.json({
          msg: 'getCategoria Api - Controlador Roles',rows
      });
  });   
}

const postCategoria = async (req = request, res = response) => {
   

   res.status(201).json();

}


const putCategoria = async (req = request, res = response) => {
   const { id } = req.params;


   res.status(201).json({msg: 'Rol Editado: ' ,rolEditado});
}

const deleteCategoria = async (req = request, res = response) => {
   const { id } = req.params;


   res.status(201).json({msg: 'Rol borrado: ' });
}

module.exports = {
   getCategoria,
   postCategoria,
   putCategoria,
   deleteCategoria
}