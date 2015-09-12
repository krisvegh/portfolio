(function() {
	var app = angular.module('app');

	/* @ngInject */
	var portfolioController = function($rootScope) {
		$rootScope.title = false;
		$rootScope.pageTitle = 'KV | Portfolio';
	};

	app.controller('portfolioController', portfolioController); 
})();