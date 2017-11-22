angular.module("MundiPaggRepos").controller('MundiPaggReposCtrl', function($scope, $http){
	$scope.app = "MundiPagg Repos"
	$scope.repositorios = [];

	var carregarNomes = function(){
		$http({
			method: 'GET',
			url: 'https://api.github.com/users/mundipagg/repos'})
			.then(function(response){
			$scope.repositorios = response.data;
		})
	}
	carregarNomes();
});