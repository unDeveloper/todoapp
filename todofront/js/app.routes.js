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
    });
// .state('register',{
//     url: '/register',
//     templateUrl: 'app/shared/registrations/register.html',
//     controller: 'RegisterController'
//   }).state('login',{
//     url: '/login',
//     templateUrl: 'app/shared/login/login.html',
//     controller: 'HomeController'
//   }).state('dashboard',{
//     url: '/dashboard',
//     templateUrl: 'app/components/trainer/dashboard/dashboardTemplate.html',
//     controller: 'DashboardController',
//     resolve:{
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   }).state('routine',{
//     url: '/routine',
//     templateUrl: 'app/components/trainer/routine/newRoutine.html',
//     controller: 'RoutineController',
//   }).state('diets',{
//     abstract: true,
//     url: '/diets',
//     template: '<div ui-view></div>',
//     resolve: {
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   }).state('diets.index',{
//     url: '/index',
//     templateUrl: 'app/components/trainer/diets/dietsTemplate.html',
//     controller: 'DietsController'
//   }).state('diets.form',{
//     url: '/form/:diet_id',
//     templateUrl: 'app/components/trainer/diets/diets.formTemplate.html',
//     controller: 'DietsController'
//   }).state('trainings',{
//     abstract: true,
//     url: '/trainings',
//     template: '<div ui-view> </div>',
//     resolve: {
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   }).state('trainings.form',{
//     url: '/form/:training_id',
//     templateUrl: 'app/components/trainer/trainings/createTraining.html',
//     controller: 'TrainingController',
//     resolve: {
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   }).state('trainings.index',{
//     url: '/index',
//     templateUrl: 'app/components/trainer/trainings/indexTraining.html',
//     controller: 'TrainingController',
//     resolve: {
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   }).state('programs',{
//     abstract: true,
//     url: '/programs',
//     template: '<div ui-view></div>',
//     resolve: {
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   }).state('programs.index',{
//     url: '/index',
//     templateUrl: 'app/components/trainer/programs/programs_template.html',
//     controller: 'ProgramController'
//   }).state('programs.form',{
//     url: '/form/:program_id',
//     templateUrl: 'app/components/trainer/programs/programs_formtemplate.html',
//     controller: 'ProgramController'
//   }).state('me',{
//     url: '/me',
//     templateUrl: 'app/components/trainer/profiles/profile_template.html',
//     controller: 'ProfileController',
//     resolve:{
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   }).state('packages',{
//     abstract: true,
//     url: '/packages',
//     template: '<div ui-view></div>',
//     resolve:{
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   }).state('packages.index',{
//     url: '/index',
//     templateUrl: 'app/components/trainer/packages/indexPackage.html',
//     controller: 'PackageController'
//   }).state('packages.form',{
//     url: '/form/:package_id',
//     templateUrl: 'app/components/trainer/packages/createPackage.html',
//     controller: 'PackageController'
//   })
//   .state('proposals',{
//     abstract: true,
//     url: '/proposals',
//     template: '<div ui-view></div>',
//     resolve:{
//       auth: function($auth, $state){
//         return $auth.validateUser();
//       }
//     }
//   })
// .state('proposals.index',{
//     url: '/index',
//     templateUrl: 'app/components/trainer/proposals/indexProposal.html',
//     controller: 'ProposalController'
//   })
// .state('proposals.form',{
//   url: '/form/:proposal_id',
//   templateUrl: 'app/components/trainer/proposals/createProposal.html'
//
//   });
}]);
