var mongoose = require('mongoose');

// User Schema
var ciudadSchema = mongoose.Schema({
	ciudad: {
		type: String
	},
	numero: {
		type: Number
	}
});

var Ciudad = module.exports = mongoose.model('Ciudad', ciudadSchema);

module.exports.agregarCiudad = function(nuevaCiudad, callback){
    nuevaCiudad.save(callback);
};

module.exports.consultarCiudad = function(consulta, callback){
	var query = {ciudad: consulta};
	Ciudad.findOne(query, callback);
};