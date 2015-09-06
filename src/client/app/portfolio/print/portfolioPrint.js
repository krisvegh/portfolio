(function() {
'use strict';

	angular
		.module('app')
		.controller('portfolioPrintController', portfolioPrintController);

	portfolioPrintController.$inject = ['portfolioPrintService', 'Lightbox'];

	function portfolioPrintController(portfolioPrintService, Lightbox) {
		var vm = this;
		vm.data = portfolioPrintService;
		vm.lightbox = function(item) {
			Lightbox.openModal(getImageArray(item), 0);
		}

		////////////////
		function getImageArray(item) {
			var imageArray = [];
			
			for (var i = 0; i < vm.data[item].img; i++) {
				imageArray.push('/app/portfolio/print/PortfDir' + (item+1) + '/' + ('00' + (i+1)).slice(-3) + '.jpg');
			}
			
			return imageArray;
		}
	}
})();