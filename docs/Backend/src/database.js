const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ExpMedico', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err));