var mongoose = require('mongoose');

// User Schema
var carnetSchema = mongoose.Schema({
	tipoDocumento: {
		type: String
	},
	numeroDocumento: {
		type: Number
	},
	nombre: {
		type: String
	},
	fechaNacimiento: {
		type: String
	},
	numRegistro: {
	    type: Number
	},
	imagen: {
	    type: String
	},
	numCertificadoNacimiento: {
	    type: Number
	},
	sexo: {
	    type: String
	},
	peso: {
	    type: Number
	},
	nombreResponsable: {
	    type: String
	},
	direccionResidenciaResponsable: {
	    type: String
	},
	ciudadResidencia: {
	    type: String
	},
	nombreInstitucion: {
	    type: String
	},
	nombreCrea: {
	    type: String
	},
	numeroDocumentoCrea: {
	    type: Number
	}
});

var Carnet = module.exports = mongoose.model('Carnet', carnetSchema);

module.exports.crearCarnet = function(carnetNuevo, callback){
    carnetNuevo.save(callback);
}