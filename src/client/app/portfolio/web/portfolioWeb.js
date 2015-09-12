(function() {

	var app = angular.module('app');
	
	/* @ngInject */
	var portfolioWebController = function($rootScope) {
		$rootScope.title = false;
		$rootScope.pageTitle = 'KV | Web';
	};

	app.controller('portfolioWebController', portfolioWebController);
})();