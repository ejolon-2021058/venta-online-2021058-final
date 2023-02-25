const { Router} = require('express');
const { getCategorias, postCategorias, deleteCategorias, putCategorias } = require('../controllers/categoria');

const router = Router();


router.get('/mostrar', getCategorias);

router.post('/agregar',postCategorias);

router.delete('/eliminar/:id',deleteCategorias);

router.put('/editar/:id',putCategorias);

module.exports = router;