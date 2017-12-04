angular.module("MundiPaggRepos").controller('MundiPaggReposCtrl', function($scope, $http, reposNameAPI, userAPI){
	$scope.app = "MundiPagg Repos"
	$scope.repositorios = [];
	$scope.users = [];

	var carregarNomes = function(){
		reposNameAPI.getreposName().then(function(response){
			$scope.repositorios = response.data;
		});
	}

	var carregarUsers = function(){
		userAPI.getreposUser().then(function(response){
				$scope.users = response.data;
			});
	}
	carregarNomes();
	carregarUsers();
});