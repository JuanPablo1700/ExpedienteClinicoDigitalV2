const { schema, model, SchemaTypes, Schema } = require('mongoose');

const medicoSchema = new Schema({
    nombre: {
        type: String
    },
    correo: {
        type: String
    },
    fechaNacimiento: {
        type: String
    },
    edad: {
        type: Number
    },
    especialidad: {
        type: String
    },
    clinica: {
        type: String
    },
    universidad: {
        type: String
    },
    password: {
        type: String
    },
    genero: {
        type: String
    }
});

module.exports = model('Medico', medicoSchema);