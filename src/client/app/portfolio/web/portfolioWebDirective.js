(function() {
	'use strict';

	angular
		.module('app')
		.directive('feralmanual', feralmanual)
		.directive('feralminisite', feralminisite)
		;

	feralmanual.$inject = [];
	function feralmanual() {
		// Usage:
		//<div feralmanual gamecode="@gamecode"></div>
		//
		// Creates:
		// A list item with the link to the manual.  
		var directive = {
			restrict: 'AE',
			scope: {
				'gamecode': '@'
			},
			templateUrl: 'app/portfolio/web/feralmanual.html'
		};
		return directive;
	}
	
	function feralminisite() {
		var directive = {
			restrict: 'AE',
			scope: {
				'gamecode': '@'
			},
			templateUrl: 'app/portfolio/web/feralminisite.html'
		};
		return directive;
	}
	
})();