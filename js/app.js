var app = angular.module('app', [
	"ngRoute",
	"dashboard"
]); 

app.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/dashboard', {
          template: '<dashboard></dashboard>'
        }).
        otherwise('/dashboard');
    }
]);