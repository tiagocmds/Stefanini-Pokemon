angular.module("pokemonApp")
.controller("logarUsuarioController", function($scope, $location, pokemonService, $rootScope){
    $scope.usuario = {};
    $rootScope.sucesso = false;
        $scope.logar = function(usuario){
            if(usuario.login === "Tiago" && usuario.senha === "123"){
                $rootScope.sucesso = true;
                $location.path("/main");
            } else {
                alert("Login Invalido");
            }
        };


});


