(function() {

	var app = angular.module('app');
	
	/* @ngInject */
	var contactController = function($rootScope) {
		$rootScope.title = false;
		$rootScope.pageTitle = 'KV | Contact';
	};

	app.controller('contactController', contactController);
})();