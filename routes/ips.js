var express = require('express');
var router = express.Router();
var futures = require('futures');
var sequence = futures.sequence();
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');

var Vacuna = require('../models/vacunas');
var Ciudad = require('../models/ciudad');
var Edad = require('../models/edad');
var Fechas = require('../models/fechas');
var VacunaEstadistica = require('../models/vacunaEstadistica');

// Register
router.get('/vacuna', ensureAuthenticated, function(req, res){
	res.render('vacuna');
});

router.get('/crearCarnet', ensureAuthenticated, function(req, res){
	res.render('crearCarnet');
});

router.get('/actualizarCarnet', ensureAuthenticated, function(req, res){
	res.render('actualizarCarnet');
});

router.get('/estadisticas', ensureAuthenticated, function(req, res) {
	var dataEdad = [];
	var dataVacunas = [];
	var dataCiudad = [];
	var dataFechas = [];

	var JSONedad = [];
	var JSONvacunas = [];
	var JSONciudad = [];
	var JSONfechas = [];

	sequence.then(function(next) {
			Edad.find().lean().exec(function(err, docs) {
				if (err) throw err;
				dataEdad = docs;
				for (var i in dataEdad) {
					delete dataEdad[i]._id;
					delete dataEdad[i].__v;
				}
				JSONedad = JSON.stringify(dataEdad);
				next();
			});
		})
		.then(function(next) {
			VacunaEstadistica.find().lean().exec(function(err, docs) {
				if (err) throw err;
				dataVacunas = docs;
				for (var i in dataVacunas) {
					delete dataVacunas[i]._id;
					delete dataVacunas[i].__v;
				}
				JSONvacunas = JSON.stringify(dataVacunas);
				next();
			});
		})
		.then(function(next) {
			Ciudad.find().lean().exec(function(err, docs) {
				if (err) throw err;
				dataCiudad = docs;
				for (var i in dataCiudad) {
					delete dataCiudad[i]._id;
					delete dataCiudad[i].__v;
				}
				JSONciudad = JSON.stringify(dataCiudad);
				next();
			});
		})
		.then(function(next) {
			Fechas.find().lean().exec(function(err, docs) {
				if (err) throw err;
				dataFechas = docs;
				for (var i in dataFechas) {
					delete dataFechas[i]._id;
					delete dataFechas[i].__v;
				}
				JSONfechas = JSON.stringify(dataFechas);
				next();
			});
		})
		.then(function(next) {

			res.render('estadisticas', {
				data: JSONedad,
				data1: JSONvacunas,
				data2: JSONciudad,
				data3: JSONfechas
			});
			next();
		});
});
	
router.post('/vacuna', function(req, res){
	var tipoDocumento = req.body.tipoDocumento;
	var numeroDocumento = req.body.numeroDocumento;
	var nombre = req.body.nombre;
	var edad = req.body.edad;
	var nombreVacuna = req.body.nombreVacuna;
	var dosis = req.body.dosis;
	var fecha = req.body.fecha;
	var laboratorio = req.body.laboratorio;
	var numeroLote = req.body.numeroLote;
	var IPS = req.user.IPS;
	var fechaProximo = req.body.fechaProximo;
	var nombreAplica = req.body.nombreAplica;
	var numDocumentoAplica = req.body.numDocumentoAplica;

	// Validation
	req.checkBody('numeroDocumento', 'Se requiere especificar un numero de documento').notEmpty();
	// req.checkBody('nombre', 'Se requiere especificar un nombre').notEmpty();
	// req.checkBody('edad', 'Se requiere especificar la edad').notEmpty();
	// req.checkBody('nombreVacuna', 'Se requiere especificar el nombre de la vacuna').notEmpty();
	// req.checkBody('dosis', 'Se requiere especificar la dosis').notEmpty();
	// req.checkBody('laboratorio', 'Se requiere especificar el laboratorio').notEmpty();
	// req.checkBody('numeroLote', 'Se requiere especificar el numero de lote').notEmpty();
	// req.checkBody('nombreAplica', 'Se requiere especificar su nombre').notEmpty();
	// req.checkBody('numeroDocumentoAplica', 'Se requiere especificar su numero de documento').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.render('vacuna',{
			errors:errors
		});
	} else {
		var nuevaVacuna = new Vacuna({
			tipoDocumento: tipoDocumento,
			numeroDocumento:numeroDocumento,
			nombre: nombre,
			edad: edad,
			nombreVacuna: nombreVacuna,
			dosis: dosis,
			fecha: fecha,
			laboratorio: laboratorio,
			numeroLote: numeroLote,
			IPS: IPS,
			fechaProximo: fechaProximo,
			nombreAplica: nombreAplica,
			numDocumentoAplica: numDocumentoAplica
		});

		Vacuna.agregarVacuna(nuevaVacuna, function(err, vacuna){
			if(err) throw err;
		});
		
		Ciudad.consultarCiudad(req.user.ciudad, function(err, ciudad1){
			if(err) throw err;
			if(!ciudad1){
				
				var nuevaCiudad = new Ciudad({
					ciudad: req.user.ciudad,
					numero: 1
				});
				
				Ciudad.agregarCiudad(nuevaCiudad, function(err, ciudad){
					if(err) throw err;
				});
			} else {
				Ciudad.update( { ciudad: req.user.ciudad },{ $inc: { numero: 1 }});
			}
		});
		
		Edad.consultarEdad(edad, function(err, edad1){
			if(err) throw err;
			if(!edad1){
				
				var nuevaEdad = new Edad({
					edad: edad,
					numero: 1
				});
				
				Edad.agregarEdad(nuevaEdad, function(err, edad){
					if(err) throw err;
				});
			} else {
				Edad.update( { edad: edad },{ $inc: { numero: 1 }});
			}
		});
		
		Fechas.consultarFecha(fecha, function(err, fecha1){
			if(err) throw err;
			if(!fecha1){
				
				var nuevaFechas = new Fechas({
					fecha: fecha,
					numero: 1
				});
				
				Fechas.agregarFechas(nuevaFechas, function(err, fecha){
					if(err) throw err;
				});
			} else {
				Fechas.update( { fecha: fecha },{ $inc: { numero: 1 }});
			}
		});
		
		VacunaEstadistica.consultarVacunaEstadistica(nombreVacuna, function(err, vacuna1){
			if(err) throw err;
			if(!vacuna1){
				
				var nuevaVacunaEstadistica = new VacunaEstadistica({
					vacuna: nombreVacuna,
					numero: 1
				});
				
				VacunaEstadistica.agregarVacunaEstadistica(nuevaVacunaEstadistica, function(err, vacuna){
					if(err) throw err;
				});
			} else {
				VacunaEstadistica.update( { vacuna: nombreVacuna },{ $inc: { numero: 1 }});
			}
		});

		req.flash('success_msg', 'Se ha registrado Satisfactoriamente la Vacuna');

		res.redirect('/');
	}
});

router.post('/actualizarCarnet', function(req, res){
	var tipoviejo = req.body.tipoDocumento;
	var numeroviejo = String(req.body.numeroDocumento);
	var tiponuevo = req.body.tipoDocumentoNuevo;
	var numeronuevo = String(req.body.numeroDocumentoNuevo);
	
	Vacuna.update({numeroDocumento: numeroviejo}, {tipoDocumento: tiponuevo, numeroDocumento: numeronuevo}, {multi: true}, 
    function(err, num) {
    	if(err) throw err;
    }
);
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;