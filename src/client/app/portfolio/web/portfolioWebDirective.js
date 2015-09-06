(function() {
	'use strict';

	angular
		.module('app')
		.directive('feralmanual', feralmanual);

	feralmanual.$inject = [];
	function feralmanual() {
		// Usage:
		//<div feralmanual gamecode="@gamecode"></div>
		//
		// Creates:
		// A list item with the link to the manual.  
		var directive = {
//			link: link,
			restrict: 'AE',
			scope: {
				'gamecode': '@'
			},
			templateUrl: 'app/portfolio/web/feralmanual.html'
		};
		return directive;
	}
})();