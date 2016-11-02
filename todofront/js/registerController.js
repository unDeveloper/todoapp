todoapp.controller('RegisterController',['$scope','$http',function($scope,$http){
  console.log("RegisterController");
  $scope.registerForm = null;
  $scope.text="dick"

  $scope.initForm = function(){
    $scope.registerForm = {};
  };

  $scope.submitRegister = function(valid){
    console.log("submitUser function");
    if(valid){
      $http.post(todoapp.apiHost+"/auth",$scope.registerForm).then(function successCallback(response){
        console.log("register");
      }, function errorCallback(error){
        console.log("error");
      })
    }
    else{
      alert("no funca");
    }
  };
}]);
