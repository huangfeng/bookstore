angular.module('bookstore', ['ionic', 'bookmodule'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('tabs',{
      url: '/tabs',
      templateUrl: 'view/tabs.html'
    })

    .state('tabs.home',{
      url: '/home',
      views: {
        'home-tabs': {
          templateUrl: 'view/home.html'    
        }
      }
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

    .state('tabs.setting',{
      url: '/setting',
      views: {
        'setting-tabs': {
          templateUrl: 'view/setting.html'
        }  
      }
    })

  $urlRouterProvider.otherwise('/tabs/home')
})