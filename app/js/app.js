angular.module("pokemonApp", ["ngRoute"])
    .config(config)
    .run(run);

run.$inject = ["$rootScope", "$location"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
    $routeProvider.
    when("/login", {
        templateUrl: "/app/pages/login.html",
        controller: "logarUsuarioController"
    }).
    when("/listarPokemon", {
        templateUrl: "/app/pages/listarPokemon.html",
        controller: "listarPokemonController"
    }).
    when("/cadastrarPokemon", {
        templateUrl: "/app/pages/cadastrarPokemon.html",
        controller: "cadastrarPokemonController as vm"
    }).
    when("/main", {
        templateUrl: "/app/pages/main.html",
        controller: "mainController"
    }).
    when("/listarTreinador", {
        templateUrl: "/app/pages/listarTreinador.html"
    }).
    when("/cadastrarTreinador", {
        templateUrl: "/app/pages/cadastrarTreinador.html"
    })
    .otherwise({
        redirectTo: "/login"
    }); 

}

function run($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function(evt, route) {
        if (route.originalPath !== "/login") {
            if ($rootScope.sucesso === false) {
                $location.path("/login");
            }
        }
    });
}