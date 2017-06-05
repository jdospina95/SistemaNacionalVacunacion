var mongoose = require('mongoose');

// User Schema
var vacunaSchema = mongoose.Schema({
	tipoDocumento: {
		type: String
	},
	numeroDocumento: {
		type: String
	},
	nombre: {
		type: String
	},
	edad: {
		type: String
	},
	nombreVacuna: {
	    type: String
	},
	dosis: {
	    type: String
	},
	fecha: {
	    type: String
	},
	laboratorio: {
	    type: String
	},
	numeroLote: {
	    type: String
	},
	IPS: {
	    type: String
	},
	fechaProximo: {
	    type: String
	},
	nombreAplica: {
	    type: String
	},
	numDocumentoAplica: {
	    type: String
	}
});

var Vacuna = module.exports = mongoose.model('Vacuna', vacunaSchema);

module.exports.agregarVacuna = function(nuevaVacuna, callback){
    nuevaVacuna.save(callback);
};