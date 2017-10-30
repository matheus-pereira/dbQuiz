angular.module('app.routes', [])
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        cache: false
    })

    .state('tab.recordes', {
        url: '/recordes',
        views: {
            'tab-recordes': {
                templateUrl: 'templates/recordes.html',
                controller: 'RecordesCtrl'
            }
        },
        cache: false
    })

    .state('tab.quiz', {
        url: '/quiz',
        views: {
            'tab-quiz': {
                templateUrl: 'templates/quiz.html',
                controller: 'QuizCtrl'
            }
        },
        cache: false
    })

    $urlRouterProvider.otherwise('/tab/recordes');

});
