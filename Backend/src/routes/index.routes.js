const { Router } = require("express");
const router = Router();

const User = require("../models/User");
const Medico = require("../models/Medico");

const jwt = require("jsonwebtoken");

router.get("/", (req, res) => res.send("Hello world"));

router.post('/registrar', async (req, res) => {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    genero,
    fechaNacimiento,
    curp,
    tipoSangre,
    estado,
    ciudad,
    cp,
    password
  } = req.body;

  const newUser = new User({
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    genero,
    fechaNacimiento,
    curp,
    tipoSangre,
    estado,
    ciudad,
    cp,
    password,
  });
  console.log(newUser);
  await newUser.save();

  const token = jwt.sign({ _id: newUser._id }, "secretKey");

  res.status(200).json({ token, curp });
});

router.post("/iniciarSesion", async (req, res) => {
  const { curp, password } = req.body;
  const user = await User.findOne({ curp });
  let id = user._id;
  if (!user) return res.status(401).send("La curp es incorrecta.");
  if (user.password !== password)
    return res.status(401).send("Contraseña incorrecta.");

  const token = jwt.sign({ _id: user._id }, "secretKey");
  return res.status(200).json({ token, id });
});

router.post("/iniciarSesionMedico", async (req, res) => {
  const { correo, password } = req.body;
  const medico = await Medico.findOne({ correo });
  if (!medico) return res.status(401).send("El correo es incorrecto.");
  if (medico.password !== password)
    return res.status(401).send("Contraseña incorrecta.");

  const token = jwt.sign({ _id: medico._id }, "secretKey");
  return res.status(200).json({ token, correo });
});

//A prueba------------------------------
router.get("/datosPaciente/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if(!user) {
      res.status(404).json({msg: 'No existe el usuario'})
    }

    return res.json(user);

  }catch (error) {
    console.log(error);
    return res.status(500).send('Hubo un error')
  }
});

module.exports = router;

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status.send("Requiere autorización");
  }

  const token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status.send("Requiere autorización");
  }

  const payload = jwt.verify(token, "secretKey");
  req.userId = payload._id;
  next();
}
