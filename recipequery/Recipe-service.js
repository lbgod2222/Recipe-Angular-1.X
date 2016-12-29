'use strict';

//�ؽ��ײ�http����
angular.
	module('recipequery').
	factory('Recipe', ['$resource', 
		function($resource) {
			return $resource('data/:recipeId.json', {}, {
				query: {
					method: 'GET',
					params: {recipeId: 'recipes'},
					isArry: true
				}
			});
		}
	]);