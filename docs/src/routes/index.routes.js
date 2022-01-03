const { Router } = require("express");
const router = Router();

const User = require("../models/User");
const Medico = require("../models/Medico");
const Diagnostico = require("../models/Diagnostico");

const jwt = require("jsonwebtoken");

router.get("/", (req, res) => res.send("Hello world"));

router.post('/registrar', async(req, res) => {
  try {
      let user;

      //Crear usuario
      user = new User(req.body);

      await user.save();
      res.send(user);
  }catch (error){
      console.log(error);
      res.status(500).send('Hubo un error');
  }
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
  let id = medico._id;
  let nombreMedico = medico.nombre;
  if (!medico) return res.status(401).send("El correo es incorrecto.");
  if (medico.password !== password)
    return res.status(401).send("Contraseña incorrecta.");

  const token = jwt.sign({ _id: medico._id }, "secretKey");
  return res.status(200).json({ token, id, nombreMedico });
});

router.put('/actualizaData/:id', async (req, res) => {
  try {
    const { altura, peso, alergias } = req.body;
    let datos = await User.findById(req.params.id);

    datos.altura = altura;
    datos.peso = peso;
    datos.alergias = alergias;

    datos = await User.findOneAndUpdate({ _id: req.params.id}, datos, {new: true});

    res.json(datos);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error.')
  }

});


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

//Buscar un paciente por su curp
router.get("/buscarPaciente/:curp", async (req, res) => {
  try {
    let user = await User.find({"curp": req.params.curp});
    let id_paciente = user._id;
    if(!user) {
      res.status(404).json({msg: 'No existe el usuario'})
    }

    return res.json({user, id_paciente});

  }catch (error) {
    console.log(error);
    return res.status(500).send('Hubo un error')
  }
});

//medico
router.get("/datosMedico/:id", async (req, res) => {
  try {
    let medico = await Medico.findById(req.params.id);
    if(!medico) {
      res.status(404).json({msg: 'No existe el usuario'})
    }

    return res.json(medico);

  }catch (error) {
    console.log(error);
    return res.status(500).send('Hubo un error')
  }
});

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

router.post('/guardarDiagnostico', async(req, res) => {
  try {
      let diagnostico;

      diagnostico = new Diagnostico(req.body);

      await diagnostico.save();
      res.send(diagnostico);
  }catch (error){
      console.log(error);
      res.status(500).send('Hubo un error');
  }
});

router.get("/obtenerConsultas/:id", async (req, res) => {
  try {
    let Diagnosticos = await Diagnostico.find({"id_paciente": req.params.id});
    let id_consulta = Diagnosticos._id;
    if(!Diagnosticos) {
      res.status(404).json({msg: 'No tiene diagnósticos'})
    }

    return res.json(Diagnosticos);

  }catch (error) {
    console.log(error);
    return res.status(500).send('Hubo un error')
  }
});


module.exports = router;