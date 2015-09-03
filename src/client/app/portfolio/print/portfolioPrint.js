(function() {
'use strict';

	angular
		.module('app')
		.controller('portfolioPrintController', portfolioPrintController);

	portfolioPrintController.$inject = ['$scope', 'portfolioPrintService'];
	function portfolioPrintController($scope, portfolioPrintService) {
		var vm = this;
		vm.data = portfolioPrintService.getData;
		console.log(vm.data);

		activate();

		////////////////

		function activate() { }
	}
})();