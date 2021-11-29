const { schema, model, SchemaTypes, Schema } = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    genero: String,
    fechaNacimiento: Date,
    curp: String,
    tipoSangre: String,
    estado: String,
    ciudad: String,
    cp: Number,
    password: String
});

module.exports = model('User', userSchema);