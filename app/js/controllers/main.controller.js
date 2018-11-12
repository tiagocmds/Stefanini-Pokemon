angular.module("pokemonApp").controller("mainController", function($scope, $location, pokemonService){
    $scope.irPokemon = function(){
        $location.path("/listarPokemon");
    };
    $scope.irTreinador = function(){
        pokemonService.captura = true;
        $location.path("/listarTreinador");
    };
});