(function() {
	var app = angular.module('app');

	/* @ngInject */
	var mainMenuController = function($rootScope) {
		$rootScope.title = true;
		$rootScope.pageTitle = 'Krisztian Vegh';
	};

	app.controller('mainMenuController', mainMenuController); 
})();