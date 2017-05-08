var app= angular.module("myModule");
app.controller('myController',function($scope,$http){


 // $scope.posts = myFactory;

 // console.log($scope.posts);
$http.get('http://www.reddit.com/r/owls/.json?limit=8').then(function(response){
  //  redditPost.push(response.data.data.children)
  //  });
  //  return {redditPost};
$scope.posts=response.data.data.children
console.log($scope.posts);
});
});
