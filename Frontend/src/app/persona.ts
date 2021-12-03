export class User {
    id: String;
    nombre: String;
    apellidoPaterno: String;
    apellidoMaterno: String;
    genero: String;
    fechaNacimiento: Date;
    curp: String;
    tipoSangre: String;
    estado: String;
    ciudad: String;
    cp: Number;
    password: String;

    constructor(
        id: String,
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
    ){
        this.id = id;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.curp = curp;
        this.tipoSangre = tipoSangre;
        this.estado = estado;
        this.ciudad = ciudad;
        this.cp = cp;
        this.password = password;
    }
}
