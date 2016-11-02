todoapp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  }).state('register',{
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterController'
  }).state('login',{
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  }).state('todotasks',{
    url: '/todotasks',
    templateUrl: 'templates/todotasks.html',
    controller: 'TodotasksController',
    resolve:{
      auth: function($auth, $state){
        return $auth.validateUser();
      }
    }
  });
}]);
