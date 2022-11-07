import { Role } from '../models/role.js';
import { Usuario } from "../models/usuario.js";

//Chequeamos que el rol sea un rol valido de la base de datos
const rolValido = async (role = "") => {
	const existeRol = await Role.findOne({ role });

	if (!existeRol) {
		throw new Error(`El rol ${role} no está registrado en la base de datos.`);
	}
}

//Chequeamos que el email ya existe en la base de datos
const emailExiste = async (correo = "") => {
	const existeEmail = await Usuario.findOne({ correo }); //esto va a buscar un correo que sea igual al que le estoy pasando

	if (existeEmail) {
		throw new Error(`El correo ${correo} ya está registrado.`);
	}
}

//Chequeamos que el usuario exista en la base de datos
const usuarioExistePorID = async (id) => {
	const existeUsuario = await Usuario.findById(id); //esto va a buscar un correo que sea igual al que le estoy pasando

	if (!existeUsuario) {
		throw new Error(`El ID ${id} no existe.`);
	}
}

export {
	rolValido,
	emailExiste,
	usuarioExistePorID
}