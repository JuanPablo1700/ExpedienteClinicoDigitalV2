const mongoose = require('mongoose')

//mongodb://localhost/ExpMedico
mongoose.connect('mongodb+srv://EquipoJAP:EquipoJAP12345@expedienteclinicodigita.wu2kd.mongodb.net/ExpMedico', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err));