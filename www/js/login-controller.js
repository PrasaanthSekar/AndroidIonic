angular
    .module('starter')
    .controller('login-controller', loginCtrl);

    function loginCtrl($scope, $state) {        
        $scope.login = function(){
            $state.go('dashboard');
        };
    }


