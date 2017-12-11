angular.module("MundiPaggRepos").controller('MundiPaggReposCtrl', function($scope, $http){
	$scope.app = "MundiPagg Repos"
	$scope.repositorios = [];
	$scope.users = [];

	var carregarNomes = function(){
		$http({
			method: 'GET',
			url: 'https://api.github.com/users/mundipagg/repos'})
			.then(function(response){
			$scope.repositorios = response.data;
		})
	}

	var carregarUsers = function(){
		$http({
			method: 'GET',
			url: 'https://api.github.com/users/mundipagg'})
			.then(function(response){
				$scope.users = response.data;
			})
	}
	carregarNomes();
	carregarUsers();
});