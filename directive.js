var app = angular.module('myModule');
app.directive('redditPost',function(){
  return {
    restrict: 'E',
    replace: false,
    templateUrl: "redditPost.html"
  }
})
