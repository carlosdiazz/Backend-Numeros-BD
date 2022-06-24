const express = require('express')
const loteriaSchema = require('../models/loteria')
const configuracionSchema = require('../models/configuracion')
const router = express.Router();

//Crear Loteria
router.post("/sorteo",(req, res) => {
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

//Obtener Resultados Por Fecha
router.get("/fecha/:fecha",(req, res) => {
    const { fecha } = req.params;
    loteriaSchema
        .find({fecha: fecha})
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
});

//Obtener Una Loteria Especifica
router.get("/loteria/:loteria",(req, res) => {
    const { loteria } = req.params;
    loteriaSchema
        .find({loteria: loteria})
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
});

//Obtener Un Sorteo especifico
router.get("/sorteo/:sorteo",(req, res) => {
    const { sorteo } = req.params;
    loteriaSchema
        .find({sorteo: sorteo})
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
});

//Obtener Un Sorteo especifico por Fecha
router.get("/sorteo/:sorteo/:fecha",(req, res) => {
    const { sorteo, fecha } = req.params;
    console.info(`Obteniendo el sorteo: ${sorteo} para la fecha: ${fecha}`);
    loteriaSchema
        .findOne({sorteo: sorteo , fecha: fecha})
        .then(data => {
            console.info(`Buscando el Sorteo: ${sorteo}`);
            res.json(data)

        })
        .catch(err => res.json({message: err}));
})

//Obtener Una Loteria especifica por Fecha
router.get("/loteria/:loteria/:fecha",(req, res) => {
    const { loteria, fecha } = req.params;
    console.info(`Obteniendo la loteria: ${loteria} para la fecha: ${fecha}`);
    loteriaSchema
        .find({loteria: loteria, fecha: fecha})
        .then(data => {
            console.info(`Buscando La Loteria: ${loteria}`);
            res.json(data)
        })
        .catch(err => res.json({message: err}));
});

router.get("/configuracion_loterias",(req, res) => {
    configuracionSchema
        .find()
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
});

module.exports = router;