angular.module("pokemonApp").controller("listarTreinador", function($scope, $rootScope, $location, pokemonService){
    $scope.service = pokemonService;

    $scope.irTelaCadastrar = function() {
        $location.path("/cadastrarTreinador");
    };
    $scope.excluir = function(index) {
        $scope.service.listaTreinadores.splice(index, 1);
    };
    $scope.editar = function(treinador) {
        $scope.service.treinador = treinador;
        $scope.irTelaCadastrar();
    };
});