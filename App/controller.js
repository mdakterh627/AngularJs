var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when("/login", {
		templateUrl:"Login.html"
	})
})