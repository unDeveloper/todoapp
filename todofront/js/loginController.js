todoapp.controller('LoginController',['$scope','$auth','$http','$state', function($scope,$auth,$http,$state){
  $scope.loginForm = null
  $scope.initForm = function(){
    $scope.loginForm = {};
  };

  $scope.userLogin = function(valid){
    if(valid){
      $auth.submitLogin($scope.loginForm).then(function(resp){
        console.log("goood");
        $state.go("todotasks");
      }).catch(function(resp){
        Notification.error("Invalid user name or password");
      });
    }else{
      Notification.error("Please, fill both fields");
    }
  };
}]);
