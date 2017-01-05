'use strict';

//…Ë÷√¬∑”…
angular.
	module('recipeApp').
	config(['$locationProvider', '$routeProvider', 
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/data', {
					template: '<recipe-list></recipe-list>'
				}).
				when('/data/:recipeId', {
					template: '<recipe-detail></recipe-detail>'
				}).
				otherwise('/data');
		}
	]);