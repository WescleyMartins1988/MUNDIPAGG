angular.module("MundiPaggRepos").factory("userAPI", function($http) {
		var _getreposUser = function(){
			return $http.get('https://api.github.com/users/mundipagg')
		}

		return  {
			getreposUser: _getreposUser
		}
});