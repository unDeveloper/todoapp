todoapp.controller('AddEditController',['$scope', '$element', 'formData','Notification', 'close',function($scope, $element, dataToEdit, Notification, close){
  console.log("AddEditController");
  console.log("formData..:"+dataToEdit);
  $scope.taskForm = JSON.parse(JSON.stringify(dataToEdit));;

  $scope.closeModal = function(task_form) {
    console.log("form valid?..:"+task_form.$valid);
    if(task_form.$valid){
      close({
        formData: $scope.taskForm
      }, 500);
    }else{
      Notification.warning("Check the fields in the form");
    }
  };

  $scope.cancel = function() {
    $element.modal('hide');
    close({
      formData: {}
    }, 500);
  };
}])
