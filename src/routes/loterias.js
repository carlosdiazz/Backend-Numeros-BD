const express = require('express')
const loteriaSchema = require('../models/loteria')

const router = express.Router();

//Crear Loteria
router.post("/loterias",(req, res) => {
    const loteriaModelo = loteriaSchema(req.body);
    const { loteria, sorteo } = req.body;
    console.log(`Agregando la loteria: ${loteria} para el sorteo ${sorteo} `);
    loteriaModelo
        .save()
        .then(data => {
            console.log('Loteria Agregada con Exito')
            res.json(data)
        })
        .catch(err =>
            console.log(
                `Error al enviar la loteria : ${loteria} para el sorteo ${sorteo}` + err
            ));
});


//Obtener todas las Loterias
router.get("/loterias",(req, res) => {
    loteriaSchema
        .find()
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
});

//Obtener Una Loteria especifica
router.get("/loterias/:loteria",(req, res) => {
    const { loteria } = req.params;
    //console.log(loteria)
    loteriaSchema
        .findOne({loteria: loteria})
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
});

module.exports = router;