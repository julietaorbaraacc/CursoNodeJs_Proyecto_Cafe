//Externo
import mongoose from 'mongoose';

//Creamos una funcion asincrona para conectar nuestro proyecto a la base de datos
const dbConnection = async () => {
	mongoose.connect(process.env.MONGODB_CNN, { useNewUrlParser: true }, (err, res) => {
		if (err) throw err;

		console.log('Base de Datos ONLINE');
	});
};

export {
	dbConnection
}