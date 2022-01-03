const { schema, model, SchemaTypes, Schema } = require('mongoose');

const diagnosticoSchema = new Schema({
    id_paciente: {
        type: String
    },
    fechaActual: {
        type: String
    },
    Atendio: {
        type: String
    },
    diagGeneral: {
        type: String
    },
    descrip: {
        type: String
    },
    listaMedicamentos: {
        nombreM: [{type: String}],
        viaAdmon: [{type: String}],
        frecuencia: [{type: String}],
        duracion: [{type: String}],
        notas: [{type: String}],
    },
    listaAntecedentes: {
        tipo: [{type: Array}],
        parentesco: [{type: Array}],
        observaciones: [{type: Array}]
    },
    listaArchivos: {
        titulo: [{type: String}],
        tipo: [{type: String}],
        ObservacionesA: [{type: String}]
    }
});

module.exports = model('Diagnostico', diagnosticoSchema);