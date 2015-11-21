var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
	$routeProvider.
	when('/',{
		templateUrl:'view/main.html',
		controller:'MainCtrl'
	}).when('/RegistroInicial',{
		templateUrl:'view/registro_inicial.html',
		controller:'RegistroInicialCtrl'
	}).when('/RegistroDetalhes',{
		templateUrl:'view/registro_detalhes.html',
		controller:'RegistroInicialCtrl'
	});
	$locationProvider.html5Mode(false).hashPrefix("!");
});