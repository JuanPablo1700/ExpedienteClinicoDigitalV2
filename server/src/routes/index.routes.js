const { Router } = require('express');
const router = Router();

const User = require('../models/User');

router.get('/', (req,res) => res.send('Hello world'));

router.post('./registrar', (req,res) => {
    res.send('registrar')
})

module.exports = router;