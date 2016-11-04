var todoapp = angular.module('todoapp',['ng-token-auth','ui.router','ui-notification','ngMaterial','angularModalService']);

/*******Configs init*******/
todoapp.apiHost = "http://localhost:3000";
// todoapp.rootHost = "http://localhost/app"
todoapp.config(function($authProvider, NotificationProvider){
  $authProvider.configure({
    apiUrl: todoapp.apiHost,
    emailRegistrationPath: '/auth',
    emailSignInPath: '/auth/sign_in',
    passwordResetPath: '/auth/password',
    passwordUpdatePath: '/auth/password',
    storage: 'localStorage',
    confirmationSuccessUrl: 'http://localhost/todofront/#/home'
  });

  NotificationProvider.setOptions({
    delay: 5000,
    startTop: 75,
    startRight: 10,
    verticalSpacing: 20,
    horizontalSpacing: 20,
    positionX: 'center',
    positionY: 'top'
  });
});

todoapp.config(['$httpProvider',function($httpProvider){
  $httpProvider.interceptors.push(function($rootScope){
    return{
      request: function(req){
        req.headers['Accept'] = req.headers['Accept'].toString()+", application/vnd.example.v1";
        return req;
      }
    };
  });
}]);

/*******Directives init*******/
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

/*******Initial run*******/
todoapp.run(['$rootScope','$state','$auth','Notification','$window', function($rootScope,$state,$auth,Notification,$window){
  $rootScope.online = true;

  $window.addEventListener("offline", function(){
    $rootScope.$apply(function(){
      $rootScope.online = false;
      Notification.error({message:"There's no internet connection",delay:"a"})
    });
  });

  $window.addEventListener("online", function(){
    $rootScope.$apply(function(){
      $rootScope.online = true;
      Notification.clearAll();
      Notification.success("We're back online");
    });
  });

  $rootScope.$on('auth:login-success', function(ev, user){
    console.log("login-success");
    $state.go("todotasks");
  });

  $rootScope.$on('auth:login-error', function(ev,user){
    console.log("login-error");
    $state.go("login");
  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, from, fromState, fromParams, error){
    console.log("state change error");
    if(typeof error!="undefined" && error!=null){
      if(error.reason=="unauthorized"){
        // console.log("No autorizado");
        $state.go('login');
      }else{
        console.log("Reason..:"+error.reason);
      }
    }

    if(typeof fromParams!="undefined" && fromParams!=null){
      if(fromParams.reason=="unauthorized"){
        // console.log("No autorizado");
        $state.go('login');
      }else{
        console.log("Reason..:"+error.reason);
      }
    }
  });
}]);

/*******Default controller*******/
todoapp.controller('HomeController',['$scope','$auth', function($scope,$auth){

}]);
