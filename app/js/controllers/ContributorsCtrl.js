angular.module("MundiPaggRepos").controller('contributorsCtrl', function($scope, $http, $routeParams){
	$scope.contr = 'Project Contributors';
	$scope.contributors = [];
	$scope.info = [];
	
	var params = $routeParams.name

	var carregarContributors = function(){
		$http({
			method: 'GET',
			url: 'https://api.github.com/repos/mundipagg/'+params+'/contributors'})
			.then(function(response){
				$scope.contributors = response.data;
			})
	}

	var carregarInfo = function(){
		$http({
			method: 'GET',
			url: 'https://api.github.com/repos/mundipagg/'+params+''})
			.then(function(response){
				$scope.info = response.data;
			})
	}

	carregarContributors();
	carregarInfo();
});