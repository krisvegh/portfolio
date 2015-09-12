(function() {
'use strict';

	angular
		.module('app')
		.controller('portfolioPrintController', portfolioPrintController);

	/* @ngInject */
	function portfolioPrintController(portfolioPrintService, Lightbox, $rootScope) {
		$rootScope.title = false;
		$rootScope.pageTitle = 'KV | Print';
		var vm = this;
		vm.data = portfolioPrintService;
		vm.lightbox = function(item) {
			Lightbox.openModal(getImageArray(item), 0);
		};

		////////////////
		function getImageArray(item) {
			var imageArray = [];
			
			for (var i = 0; i < vm.data[item].img; i++) {
				imageArray.push('/images/portfolio/PortfDir' + (item+1) + '/' + ('00' + (i+1)).slice(-3) + '.jpg');
			}
			
			return imageArray;
		}
	}
})();