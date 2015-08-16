'use strict'

var app= angular.module('app', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
		.when('/introduction', {
			templateUrl: '../introduction/introduction.html',
			controller: 'introductionController'
		})
		.when('/contact', {
			templateUrl: '../contact/contact.html',
			controller: 'contactController'
		})
		.when('/portfolio', {
			templateUrl: '../portfolio/portfolio_print.html',
			controller: 'portfolioController'
		})
		.when('/skills', {
			templateUrl: '../skills/skills.html',
			controller: 'skillsController'
		})
		.otherwise({
			
		})

	})