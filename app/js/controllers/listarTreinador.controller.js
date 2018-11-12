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
    $scope.capturar = function(treinador){
        var treinadorAlterado = $scope.service.listaTreinadores.filter(function(treinadorItem) {
            if (treinadorItem.id === treinador.id) {
                return treinadorItem;
            }
        });
        
        var index = $scope.service.listaTreinadores.indexOf(treinadorAlterado[0]);

        treinador.pokemons.push(pokemonService.pokemon);
        $scope.service.listaTreinadores.splice(index, 1, treinador);


      //alert("O treinador "+ treinador.nome + " capturou o pokemon " + pokemonService.pokemon.nome);
       pokemonService.captura = true;
      
    };
    $scope.voltar = function(){
        $location.path("/main");
    };
});