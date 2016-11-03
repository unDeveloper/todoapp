todoapp.controller('AddEditController',['$scope', '$element', 'formData','Notification', 'close',function($scope, $element, dataToEdit, Notification, close){
  console.log("AddEditController");
  console.log("formData..:"+dataToEdit);
  $scope.taskForm = JSON.parse(JSON.stringify(dataToEdit));
  $scope.tmpScheduledDay = $scope.taskForm.scheduled_day.split("-");
  $scope.tmpScheduledHour = $scope.taskForm.scheduled_hour.split(":");
  $scope.taskForm.scheduled_day = new Date();
  $scope.taskForm.scheduled_day.setFullYear = $scope.tmpScheduledDay[0]
  $scope.taskForm.scheduled_day.setMonth = $scope.tmpScheduledDay[1]
  $scope.taskForm.scheduled_day.setDate = $scope.tmpScheduledDay[2]
  $scope.taskForm.scheduled_hour = new Date();
  $scope.taskForm.scheduled_hour.setHours($scope.tmpScheduledHour[0]);
  $scope.taskForm.scheduled_hour.setMinutes($scope.tmpScheduledHour[1]);
  $scope.taskForm.scheduled_hour.setSeconds($scope.tmpScheduledHour[2]);

  $scope.closeModal = function(task_form) {
    console.log("form valid?..:"+task_form.$valid);
    if(task_form.$valid){
      $scope.taskForm.scheduled_hour = $scope.taskForm.scheduled_hour.toLocaleTimeString();
      var date = $scope.taskForm.scheduled_day;
      var month = $scope.taskForm.scheduled_day.getMonth()+1;
      month = (month < 10 ? '0'+month : month );
      date = date.toString().concat('-'+month);
      date = date.toString().concat('-'+$scope.taskForm.scheduled_day.getDate());
      $scope.taskForm.scheduled_day = date;
      close({
        formData: JSON.parse(JSON.stringify($scope.taskForm))
      }, 500);
    }else{
      Notification.warning("Check the fields in the form");
    }
    $scope.taskForm={};
    $element.modal('hide');
  };

  $scope.cancel = function() {
    $element.modal('hide');
    close({
      formData: {}
    }, 500);
    $scope.taskForm={};
  };
}])
