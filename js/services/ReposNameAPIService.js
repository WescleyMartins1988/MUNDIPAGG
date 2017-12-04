angular.module("MundiPaggRepos").factory("reposNameAPI", function($http) {
		var _getreposName = function(){
			return $http.get('https://api.github.com/users/mundipagg/repos')
		}

		return  {
			getreposName: _getreposName
		}
});