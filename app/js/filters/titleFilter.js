angular.module("MundiPaggRepos").filter("titleFilter", function() {
	return function(input){
		var reposFilter = input.replace("_", "-");
		return reposFilter.charAt(0).toUpperCase() + reposFilter.substring(1).toLowerCase();
	}
	return input;
});