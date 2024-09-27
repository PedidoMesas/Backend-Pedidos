const { response, request } = require('express');

const getCategoria = async (req = request, res = response) => {
    

    res.json({
        msg: 'getCategoria Api - Controlador Roles',
        listarRoles
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