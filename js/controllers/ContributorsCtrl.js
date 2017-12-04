angular.module("MundiPaggRepos").controller('contributorsCtrl', function($scope, $http, $routeParams, contributorsAPI, respositorioInfoAPI){
	$scope.contr = 'Project Contributors';
	$scope.contributors = [];
	$scope.info = [];
	
	var params = $routeParams.name

	var carregarContributors = function(){
			contributorsAPI.getContributors().then(function(response){
				$scope.contributors = response.data;
			})
	}

	var carregarInfo = function(){
		respositorioInfoAPI.getRepositorioInfo().then(function(response){
				$scope.info = response.data;
			})
	}

	carregarContributors();
	carregarInfo();
});