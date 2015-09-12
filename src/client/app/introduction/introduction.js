(function() {
	var app = angular.module('app');

	/* @ngInject */
	var introductionController = function($rootScope) {
		$rootScope.title = false;
		$rootScope.pageTitle = 'KV | Intro';		
	};

	app.controller('introductionController', introductionController); 
})();