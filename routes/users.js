var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var futures = require('futures');
var sequence = futures.sequence();

var User = require('../models/user');
var Vacuna = require('../models/vacunas');
var Carnet = require('../models/carnetVacunacion');

// Register
router.get('/register', function(req, res){
	res.render('register');
});

router.get('/index', function(req, res){
	res.render('index');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

router.get('/historial', function(req, res){
	res.render('consulta');
});

router.post('/historial', function(req, res) {
			var vacunas = [];
			var tipoDocumento = req.body.tipoDocumento;
			var documento = req.body.documento;

			sequence.then(function(next) {
				Vacuna.find({
						tipoDocumento: tipoDocumento,
						numeroDocumento: documento
					}).cursor()
					.on('data', function(doc) {
						vacunas[vacunas.length] = doc;
					})
					.on('error', function(err) {
						throw err;
					});
				next();
			})
			.then(function(next) {
				res.render('consulta', {
					items: vacunas
				});
				next();
			});
});

// Register User
router.post('/register', function(req, res){
	var IPS = req.body.IPS;
	var ciudad = req.body.ciudad;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation
	req.checkBody('IPS', 'Se requiere una Entidad Prestadora de Salud').notEmpty();
	req.checkBody('ciudad', 'Se requiere especificar la ciudad de la IPS').notEmpty();
	req.checkBody('username', 'Se requiere definir un nombre de usuario').notEmpty();
	req.checkBody('password', 'Se requiere una contraseña').notEmpty();
	req.checkBody('password2', 'Las contraseñas no coinciden').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newUser = new User({
			username: username,
			password: password,
			IPS: IPS,
			ciudad: ciudad
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'Se ha registrado el usuario de la IPS');

		res.redirect('/users/login');
	}
});

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Usuario Desconocido'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Contraseña Invalida'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'Se ha cerrado sesión');

	res.redirect('/users/login');
});

module.exports = router;