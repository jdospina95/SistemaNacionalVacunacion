var mongoose = require('mongoose');

// User Schema
var fechasSchema = mongoose.Schema({
	fecha: {
		type: String
	},
	numero: {
		type: Number
	}
});

var Fechas = module.exports = mongoose.model('Fechas', fechasSchema);

module.exports.agregarFechas = function(nuevaFecha, callback){
    nuevaFecha.save(callback);
};

module.exports.consultarFecha = function(consulta, callback){
	var query = {fecha: consulta};
	Fechas.findOne(query, callback);
};