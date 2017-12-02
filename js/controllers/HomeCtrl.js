angular.module("MundiPaggRepos").controller('homeCtrl', function($scope){
	$scope.title = "Desafio Mundipagg";
	$scope.description = "Esta aplicação foi baseada em um desafio feito pela empresa Mundipagg, o objetivo é desenvolver uma aplicação que deverá integrar com a API-V3 do Github e listar alguns dados do Github da Mundipagg."
	$scope.info = "Clique em Listar para ver os dados do Github da Mundipagg."
	$scope.description2 = "A aplicação deve ser desenvolvida em HTML, CSS e JS, sendo livre o uso de Frameworks, listar os Repositórios e mostrar a quantidade de Stars, Forks e Contributers por projeto."
});