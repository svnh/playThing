app.controller("bambi", function($scope){
  $scope.runFree = function(){
    console.log('i\'m freeeee!')
  }
})

.controller('KidCtrl', function($scope){
  $scope.logChore = function(chore){
    console.log('done with ' + chore)
  }
})

.controller('FlavorCtrl', function($scope){
  $scope.ctrlFlavor = "gooseberry"
})

.controller('PhoneCtrl', function($scope){
  $scope.leaveVoicemail = function(number, message){
    console.log('Number: ' + number + ' said: ' + message);
  };
})

.controller('EventCtrl', function($scope){
  $scope.count = 0;

  $scope.increment = function(){
    $scope.count++;
  }

  $scope.$on('adding', function() {
    $scope.count++;
  });
})

.controller('WatchCtrl', function($scope, $timeout) {
    $scope.count = 0;

    $scope.addOne = function(){
      $scope.count++;
    }

    var watchCB = function() { 
      console.log('watch, count: ' + $scope.count);
    }
    
    $scope.$watch('count', watchCB)
})

