var todoapp = angular.module('todoapp',['ng-token-auth','ui.router']);

todoapp.apiHost = "http://localhost:3002";
// todoapp.rootHost = "http://localhost/app"
todoapp.config(function($authProvider){
  $authProvider.configure({
    apiUrl: todoapp.apiHost,
    emailRegistrationPath: '/auth',
    emailSignInPath: '/auth/sign_in',
    passwordResetPath: '/auth/password',
    passwordUpdatePath: '/auth/password',
    storage: 'localStorage',
    confirmationSuccessUrl: 'http://localhost/todofront/#/home'
  });
});

var comparePasswords = function() {
  return {
    require: 'ngModel',
    scope: {
      otherModelValue: "=comparePasswords"
    },
    link: function(scope, element, attributes, ngModel){
      ngModel.$validators.comparePasswords = function(modelValue){
        return modelValue == scope.otherModelValue
      };

      scope.$watch("otherModelValue", function(){
        ngModel.$validate();
      });
    }
  };
};

todoapp.directive("comparePasswords", comparePasswords);

todoapp.controller('HomeController',['$scope', function($scope){

}]);
