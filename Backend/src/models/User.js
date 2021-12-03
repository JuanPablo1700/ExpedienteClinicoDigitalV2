const { schema, model, SchemaTypes, Schema } = require('mongoose');

const userSchema = new Schema({
    nombre: {
        type: String
    },
    apellidoPaterno: {
        type: String
    },
    apellidoMaterno: {
        type: String
    },
    genero: {
        type: String
    },
    fechaNacimiento: {
        type: Date
    },
    curp: {
        type: String
    },
    tipoSangre: {
        type: String
    },
    estado: {
        type: String
    },
    ciudad: {
        type: String
    },
    cp: {
        type: Number
    },
    password: {
        type: String
    }
});

module.exports = model('User', userSchema);