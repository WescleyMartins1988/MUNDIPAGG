angular.module("MundiPaggRepos").filter("titleFilter", function() {
	return function(input){
		var reposFilter = input.replace(/_/g, "-");
		return reposFilter;
	}
	return input;
});