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
    listaMedicamentos: [
        nombreM = "",
        viaAdmon = "",
        frecuencia = "",
        duracion = "",
        notas = ""
    ],
    listaAntecedentes: [
        tipo = "",
        parentesco = "",
        observaciones = ""
    ],
    listaArchivos: [
        titulo = "",
        tipo = "",
        ObservacionesA = ""
    ]
});

module.exports = model('Diagnostico', diagnosticoSchema);