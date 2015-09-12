/// <reference path="../../../typings/angularjs/angular.d.ts" />
(function() {
    'use strict';

    angular
    	.module('app', ['ngRoute', 'ngAnimate', 'bootstrapLightbox'])

    	.config(function ($routeProvider, $locationProvider) {
    		$routeProvider
    			.when('/contact', {
    				templateUrl: 'app/contact/contact.html',
    				controller: 'contactController'
    			})
			  	.when('/introduction', {
					templateUrl: 'app/introduction/introduction.html',
					controller: 'introductionController'
    			})
    			.when('/portfolio', {
					templateUrl: 'app/portfolio/portfolio.html',
					controller: 'portfolioController'
    			})
                .when('/portfolio/print', {
                    templateUrl: 'app/portfolio/print/portfolio_print.html',
                    controller: 'portfolioPrintController',
                    controllerAs: 'vm'
                })
                .when('/portfolio/web', {
                    templateUrl: 'app/portfolio/web/portfolio_web.html',
                    controller: 'portfolioWebController',
                })
    			.when('/skills', {
					templateUrl: 'app/skills/skills.html',
					controller: 'skillsController'
    			})
    			.when('/main', {
    				templateUrl: 'app/mainmenu/mainmenu.html',
                    controller: 'mainMenuController'
    			})
                .otherwise('/main', {
                    
                });

    		$locationProvider
    			.html5Mode(true);
    	});
})();