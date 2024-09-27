const { response, request } = require('express');

const get = async (req = request, res = response) => {
    

    res.json({
        msg: 'get Api - Controlador Roles',
        listarRoles
    });
}

const post = async (req = request, res = response) => {
   

   res.status(201).json();

}


const put = async (req = request, res = response) => {
   const { id } = req.params;


   res.status(201).json({msg: 'Rol Editado: ' ,rolEditado});
}

const delete = async (req = request, res = response) => {
   const { id } = req.params;


   res.status(201).json({msg: 'Rol borrado: ' });
}

module.exports = {
   get,
   post,
   put,
   delete
}