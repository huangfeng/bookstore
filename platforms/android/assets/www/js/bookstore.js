angular.module('bookstore', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('tabs',{
      url: '/tabs',
      templateUrl: 'view/tabs.html'
    })
  
  $urlRouterProvider.otherwise('/tabs')
})