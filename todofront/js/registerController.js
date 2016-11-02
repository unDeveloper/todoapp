todoapp.controller('RegisterController',['$scope','$http','Notification',function($scope,$http,Notification){
  console.log("RegisterController");
  $scope.registerForm = null;
  $scope.initForm = function(){
    $scope.registerForm = {};
  };

  $scope.submitRegister = function(valid){
    console.log("submitUser function");
    $scope.registerForm.confirm_success_url = "http://localhost/todofront/#/todotasks";
    if(valid){
      $http.post(todoapp.apiHost+"/auth",$scope.registerForm).then(function successCallback(response){
        console.log("register");
      }, function errorCallback(error){
        console.log("error");
      })
    }else{
      Notification.error("Please check the register form");
    }
  };
}]);
