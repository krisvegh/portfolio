(function() {
'use strict';

	angular
		.module('app')
		.factory('portfolioPrintService', portfolioPrintService);

	portfolioPrintService.$inject = ['$http'];
	function portfolioPrintService($http) {
		var service = {
			getData: getData()
		};
		
		return service;

		////////////////
		function getData() {
			$http.get('/app/portfolio/print/data.json')
				.success(function(data) {
					service.getData = data;
			})
		}
	}
})();