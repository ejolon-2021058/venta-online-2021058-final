const{ Schema, model} = require('mongoose');

const CategoriaSchema = Schema({
    nombre:{
        type: String,
        required:[true,'el nombre es obligatorio'],
    },
    
    descripcion:{
        type: String,
        required:[true,'la descripcion es obligatoria'],
    },

    img: {
        type: String
    },

    estado:{
        type: Boolean,
        default: true
    },



});

module.exports = model('Categoria', CategoriaSchema);
