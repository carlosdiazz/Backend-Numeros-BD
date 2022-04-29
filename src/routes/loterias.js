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
        .find({loteria: loteria})
        .then(data => res.json(data))
        .catch(err => res.json({message: err}));
});

//Obtener Una Loteria especifica por fecha
router.get("/loterias/:sorteo/:fecha",(req, res) => {
    const { sorteo, fecha } = req.params;
    console.info(`Obteniendo la loteria ${sorteo} para la fecha ${fecha}`);
    loteriaSchema
        .findOne({sorteo: sorteo , fecha: fecha})
        .then(data => {
            console.info(`Buscando Sorteo: ${sorteo}`);
            res.json(data)

        })
        .catch(err => res.json({message: err}));
    })


module.exports = router;