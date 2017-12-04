angular.module("MundiPaggRepos").factory("respositorioInfoAPI", function($http,$routeParams) {
		var params = $routeParams.name
		var _getRepositorioInfo = function(){
			return $http.get('https://api.github.com/repos/mundipagg/'+params+'')
		}

		return  {
			getRepositorioInfo: _getRepositorioInfo
		}
});