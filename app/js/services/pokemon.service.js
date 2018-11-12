angular.module("pokemonApp")
    .factory("pokemonService", pokemonService);

    pokemonService.$inject = [];

    function pokemonService() {
        var _pokemon = null;
        
        var _listaPokemons = 
            [{nome: "Pikachu", tipo: {codigo: 1, descricao: "Raio"}}];
        
        var _listaTipos = [
            {codigo: 1, descricao: "Raio"},
            {codigo: 2, descricao: "Fogo"},
            {codigo: 3, descricao: "Água"}
        ];
        var _listaTreinadores = [
            {nome: "Tiago", id: 1, pokemons: []}
        ];
        var _captura = false;


        return {
            listaPokemons: _listaPokemons,
            listaTipos: _listaTipos,
            pokemon: _pokemon,
            listaTreinadores: _listaTreinadores,
            captura: _captura

        };
    }