var mongoose = require('mongoose');

// User Schema
var edadSchema = mongoose.Schema({
	edad: {
		type: Number
	},
	numero: {
		type: Number
	}
});

var Edad = module.exports = mongoose.model('Edad', edadSchema);

module.exports.agregarEdad = function(nuevaEdad, callback){
    nuevaEdad.save(callback);
};

module.exports.consultarEdad = function(consulta, callback){
	var query = {edad: consulta};
	Edad.findOne(query, callback);
};