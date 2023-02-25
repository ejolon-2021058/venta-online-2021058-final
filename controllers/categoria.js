const { response, request } = require('express');
const Categoria = require('../models/categoria');

const getCategorias = async (req = request, res = response) => {

    //Condiciones del get
    const query = { estado: true };


    const listaCategorias = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        msg: 'get Api = mostrar Usuario',
        listaCategorias
    });
    
}

const postCategorias = async (req = request, res = response) => {

    // //Desestructuracion
    const { nombre, descripcion } = req.body;
    const categoriaGuardadaDB = new Categoria({ nombre, descripcion});


    //guardadr en db
    await categoriaGuardadaDB.save();


    res.json({
        msg: 'post Api = post Categoria:',
        categoriaGuardadaDB
    });
}


const deleteCategorias = async (req = request, res = response) => {
    
    const {id} = req.params;

    //Eliminando fisicamente de la base de datos
    const cateogoriaEliminada = await Categoria.findByIdAndDelete(id)
    
    
    res.json({
        msg: 'delete Api = eliminando Categoria',
        cateogoriaEliminada
    })
}

const putCategorias = async (req = request, res = response) => {


    //req.params para ir a traer parametros de las rutas
    const { id } = req.params;
    const { _id, img, estado, ...resto } = req.body;


    //Editar al usuario por el id
    const cateogoriaEditada = await Categoria.findByIdAndUpdate(id, resto);



    res.json({
        msg: 'put Api = Editar Categoria',
        id,
        cateogoriaEditada
    });
}



module.exports = {
    getCategorias,
    postCategorias,
    deleteCategorias,
    putCategorias
}
