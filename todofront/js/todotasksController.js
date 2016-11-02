todoapp.controller('TodotasksController', ['$scope','$http','$auth','ModalService',function($scope,$http,$auth,ModalService){
  console.log("TodotasksController");
  $scope.detailsHours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  $scope.userEmail = null;
  $scope.selectedDate = null;
  $scope.tasks = null;

  $scope.initScreen = function(){
    $scope.userEmail = $auth.user.email;
    $scope.selectedDate = new Date();
    $scope.getTasksByUser();
  };

  $scope.$watch("selectedDate", function(){
    console.log("date change");
    $scope.getTasksByUser();
  });

  $scope.getTasksByUser = function(){
    var date = $scope.selectedDate.getFullYear();
    var month = $scope.selectedDate.getMonth()+1;
    month = (month < 10 ? '0'+month : month );
    date = date.toString().concat('-'+month);
    date = date.toString().concat('-'+$scope.selectedDate.getDate());
    $http.get(todoapp.apiHost+"/api/tasks?date="+date).then(function successCallback(res){
      console.log("goood");
      for(i = 0; i < res.data.length; i++){
        var indexOf = res.data[i].scheduled_hour.indexOf('T')
        res.data[i].scheduled_hour = res.data[i].scheduled_hour.substring(indexOf+1,indexOf+9)
      }
      $scope.tasks = res.data;
    }, function errorCallback(err){
      console.log("wrong");
    });
  };

  $scope.addNewTask = function(hour){
    ModalService.showModal({
       templateUrl: "templates/modals/newEditTasks.html",
       controller: "AddEditController",
       inputs: {
         title: "A More Complex Example"
       }
     }).then(function(modal) {
       modal.element.modal();
       modal.close.then(function(result) {
         $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
       });
     });
  };
}]);
