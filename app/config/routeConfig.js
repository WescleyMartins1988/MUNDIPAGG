angular.module("MundiPaggRepos").config(function($routeProvider){
	
	$routeProvider.when("/",{
		templateUrl: "view/home.html",
		controller: "homeCtrl"
	});

	$routeProvider.when("/github-info", {
		templateUrl: "view/github-info.html",
		controller: "MundiPaggReposCtrl"
	});

	$routeProvider.when("/contributors/:name",{
		templateUrl: "view/contributors.html",
		controller: "contributorsCtrl",
	});
})