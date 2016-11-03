todoapp.controller('TodotasksController', ['$scope','$http','$auth','ModalService','Notification',function($scope,$http,$auth,ModalService,Notification){
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

  $scope.addNewTask = function(hour,object){
    initialFormData = object;
    ModalService.showModal({
       templateUrl: "templates/modals/newEditTasks.html",
       controller: "AddEditController",
       inputs: {
         formData: initialFormData
       }
     }).then(function(modal) {
       modal.element.modal();
       modal.close.then(function(result) {
         console.log(result)
         if(typeof result.formData != "undefined" && result.formData!="null"){
           //result.formData.scheduled_hour = result.formData.scheduled_hour.toLocaleTimeString();
           //var indexOf = result.formData.scheduled_hour.indexOf('T')
           //result.formData.scheduled_hour = result.formData.scheduled_hour.substring(indexOf+1,indexOf+9)
           if(typeof result.formData.id != "undefined" && result.formData.id != null){
             $scope.saveTasks({task: result.formData}, true);
           }else{
             $scope.saveTasks({task: result.formData}, false);
           }
         }
       });
     });
  };

  $scope.saveTasks = function(toSave, isEdit){
    var url = todoapp.apiHost+"/api/tasks"
    if(!isEdit){
      $http.post(url, toSave).then(function successCallback(resp){
        $scope.getTasksByUser();
      }, function errorCallback(err){
        Notification.error("Something went terrebly wrong");
      })
    }else{
      $http.put(url+"/"+toSave.task.id, toSave).then(function successCallback(resp){
        $scope.getTasksByUser();
      }, function errorCallback(err){
        Notification.error("Something went terrebly wrong");
      })
    }
  };
}]);
