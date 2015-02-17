angular.module('bookstore', ['ionic', 'bookmodule'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('tabs',{
      url: '/tabs',
      templateUrl: 'view/tabs.html'
    })

    .state('tabs.books',{
      url: '/books',
      views: {
        'books-tabs': {
          templateUrl: 'view/books.html',
          controller: 'bookcontroller'
        }
      }
    })
      
  $urlRouterProvider.otherwise('/tabs/books')
})