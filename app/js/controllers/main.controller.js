angular.module("pokemonApp").controller("mainController", function($scope, $location){
    $scope.irPokemon = function(){
        $location.path("/listarPokemon");
    };
    $scope.irTreinador = function(){
        $location.path("/listarTreinador");
    };
});