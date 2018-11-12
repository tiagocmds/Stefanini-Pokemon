angular.module("pokemonApp").controller("cadastrarTreinador", function($scope, $rootScope, $location, pokemonService){
    $scope.contadorId = 0;
    $scope.service = pokemonService;
    $scope.treinador = $scope.service.treinador;
    
    $scope.inserir = function(treinador) {
        if (treinador.id) {
            var treinadorAlterado = $scope.service.listaTreinadores.filter(function(treinadorItem) {
                if (treinadorItem.id === treinador.id) {
                    return treinadorItem;
                }
            });
            
            var index = $scope.service.listaTreinadores.indexOf(treinadorAlterado[0]);
            $scope.service.listaTreinadores.splice(index, 1, treinador);
            
        
        } else {
        treinador.id = $scope.service.listaTreinadores.length + 1;
        treinador.pokemons = [];
        $scope.service.listaTreinadores.push(angular.copy(treinador));
        }
        
        $scope.treinador = {};
        $scope.service.treinador = {};
        $location.path("/listarTreinador");
        
    };
});