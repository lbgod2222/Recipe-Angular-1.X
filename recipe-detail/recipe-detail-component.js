'use strict';

//ע��recipeDetail�����
angular.
	module('recipeDetail').
	component('recipeDetail',{
		templateUrl: 'recipe-detail/recipe-detail-template.html',
		controller: ['$routeParams', 'Recipe',
			function RecipeDetailController($routeParams, Recipe) {
				var self = this;
				self.recipe = Recipe.get({recipeId: $routeParams.recipeId});
		}
	  ]
	});