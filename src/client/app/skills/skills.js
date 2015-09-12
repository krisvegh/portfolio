(function() {
	var app = angular.module('app');

	/* @ngInject */
	app.controller('skillsController', function($rootScope) {
		$rootScope.sectionTitle = 'Skills';
		$rootScope.title = false;
		$rootScope.pageTitle = 'KV | Skills';
	}); 
})();