'use strict';

//×¢²árecipeList×é¼þ¡£
angular.
	module('recipeList').
	component('recipeList',{
		templateUrl: 'recipe-list/recipe-list-template.html',
		controller: ['Recipe',
			function RecipeListController(Recipe){
				this.recipes = Recipe.query();
		}
	  ]
	});