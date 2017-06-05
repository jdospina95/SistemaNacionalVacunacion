var mongoose = require('mongoose');

// User Schema
var vacunasSchema = mongoose.Schema({
	vacuna: {
		type: String
	},
	numero: {
		type: Number
	}
});

var VacunasEstadistica = module.exports = mongoose.model('VacunasEstadistica', vacunasSchema);

module.exports.agregarVacunaEstadistica = function(nuevaVacunaEstadistica, callback){
    nuevaVacunaEstadistica.save(callback);
};

module.exports.consultarVacunaEstadistica = function(consulta, callback){
	var query = {vacuna: consulta};
	VacunasEstadistica.findOne(query, callback);
};