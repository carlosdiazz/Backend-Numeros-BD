const mongoose = require('mongoose');

const loteriaSchema = mongoose.Schema({
    loteria: {
        type: String,
        required: true
    },
    sorteo: {
        type: String,
        required: true
    },
    numeros_ganadores:{
        type: Array,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    agregado_por: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('loteria', loteriaSchema);