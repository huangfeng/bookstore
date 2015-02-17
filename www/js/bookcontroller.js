var bookmodule = angular.module('bookmodule',[]);

bookmodule.controller('bookcontroller', function($scope){
  $scope.books = [
    {id: 1, name: 'Angular Js Zombie', description: 'Learn angular for newbie', price: 30600},
    {id: 2, name: 'Javascript Ninja', description: 'Newbie javascript to hero javascript', price: 35000},
    {id: 3, name: 'Ruby On Rails High', description: 'Learn Ruby on Rails for newbie', price: 32000},
    {id: 4, name: 'java for Dekstop Development', description: 'Learn Java for newbie', price: 40000}
  ]
})