angular.module("MundiPaggRepos").factory("contributorsAPI", function($http,$routeParams) {
		var params = $routeParams.name
		var _getContributors = function(){
			return $http.get('https://api.github.com/repos/mundipagg/'+params+'/contributors')
		}

		return  {
			getContributors: _getContributors
		}
});