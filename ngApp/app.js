var comics;
(function (comics) {
    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('login', {
            url: '/',
            templateUrl: '/ngApp/views/login.html',
            controller: comics.Controllers.LoginController,
            controllerAs: 'vm'
        })
            .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: comics.Controllers.RegisterController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(comics || (comics = {}));
