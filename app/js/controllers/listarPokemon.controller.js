        angular.module("pokemonApp")
        .controller("listarPokemonController", listarPokemonController);

        listarPokemonController.$inject = ['$scope', "$rootScope", "$location", "pokemonService"];

        function listarPokemonController($scope, $rootScope, $location, pokemonService) {
            $scope.service = pokemonService;

            $scope.irTelaCadastrar = function() {
                $location.path("/cadastrarPokemon");
            };

            $scope.editar = function(pokemon) {
                $scope.service.pokemon = pokemon;
                $scope.irTelaCadastrar();
            };

            $scope.excluir = function(index) {
                $scope.service.listaPokemons.splice(index, 1);
            };
            $scope.capturar = function(pokemon){
                pokemonService.pokemon = pokemon;
                pokemonService.captura = false;
                $location.path("/listarTreinador");
                
            };
            $scope.voltar = function(){
                $location.path("/main");
            };
            
        }