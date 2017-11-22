angular.module("MundiPaggRepos").controller('contributorsCtrl', function($scope, $http, $routeParams){
	$scope.contr = 'Project Contributors';
	$scope.contributors = [];
	
	var params = $routeParams.name

	var carregarContributors = function(){
		$http({
			method: 'GET',
			url: 'https://api.github.com/repos/mundipagg/'+params+'/contributors'})
			.then(function(response){
				$scope.contributors = response.data;
			})
	}

	carregarContributors();
});