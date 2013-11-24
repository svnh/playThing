app.directive("superman", function() {
  // creates a "superman" element
  return {
    restrict: "E",
    template: "<div> Here I am to save the day </div>"
  }
})

.directive("flying", function() {
  // creates a class that alerts 'supaman is flying!'
  return {
    restrict: "C",
    link: function(){
      alert('supaman is flying!')
    }
  }
})

.directive("working", function() {
  // creates an attribute that logs 'hai' on mouseover
  // you don't need to restrict or link because this is
  // the most common type of directive so it is built in
  return function(scope, element){
      element.bind("mouseenter", function(){
        console.log('hai')
      })
    }
})

.directive("enter", function() {
  // creates an attribute that turns the text red by 
  // adding the 'gosdo' class with a color: red property
  return function(scope, element, attrs){
      element.bind("mouseenter", function(){
        element.addClass(attrs.enter);
      })
    }
})

.directive("kittennoise", function(){
  return {
    restrict: "E",
    // creates an isolated scope for each instance
    scope: {},
    controller: function($scope){
      $scope.noises = [];
      
      this.meow = function() {
        $scope.noises.push("meow!")
      } 
    },

    link: function($scope, element){
      element.bind("mouseenter", function () {
        console.log($scope.noises)
      })
    }
  }
})
.directive("kitten", function(){
  return {
    // this directive uses another
    require: "kittennoise",
    link: function(scope, element, attrs, kittennoise){
      kittennoise.meow()
    }
  }
})

.directive("wat", function(){
  // transclusion means that the elements inside will be rendered
  // inside of the element that includes ng-transclude
  // this is a container
  return {
    restrict: "E",
    transclude: true,
    template: '<div class="outside" ng-transclude> Outside </div>'
  }
})

.directive("clock", function(){
  return {
    restrict: "E",
    scope: {
      // the @ symbol is shorthand read in an attribute
      timezone: "@"
    },
    // you can bind from scope into the template
    // this is a componenet, which allows you to 
    // display the data that you pass into the attributes
    template: '<div>12:00PM {{ timezone }}</div>'
  }
})

.directive('sup', function() {
  // this template is a script tag
  return {
    restrict: 'E',
    templateUrl: 'helloTemplateInline.html',
    replace: true
  }
})


.directive('heddu', function() {
  // this directive loads a template from a file
  // and only works if the server is running bcuz
  // of CORS
  return {
    restrict: 'E',
    templateUrl: 'helloTemplate.html',
    replace: true
  }
})

// instead of writing the template in a file or a script tag, you can
// cache the template from the beginning and then reference it by key
.run(function($templateCache){
  // wazzaPlate is stored as a key-value pair in the templateCache
  $templateCache.put('wazzaPlate.html', '<div> cached template </div>')
})
.directive('wazza', function () {
  return {
    restrict: 'E',
    templateUrl: 'wazzaPlate.html'
  }
})

.directive('kid', function(){
  return {
    // the input value is chore and that input 
    // is shown after the input box
    restrict: 'E',
    // limits the scope to each instance
    scope: {},
    template: '<input type="text" ng-model="chore"/> {{ chore }}'
  }
})

.directive('chiddy', function(){
  return {
    // the input value is chore and that input 
    // is shown after the input box
    restrict: 'E',
    // limits the scope to each instance
    scope: {
      // & means expression
      done: "&"
    },
    template: '<input type="text" ng-model="chore">' + 
              '<button ng-click="done({ chore: chore })">i\'m done</button>'
  }
})

.directive('phone', function(){
  return {
    restrict: 'E',
    scope: {
      
      // "@" is basically shorthand for reading in an attribute.
      
      // "@" scope allows the numbers to be read and isolated from the other phone directives 
      number: '@',
      
      // "=" is going to set up a bidirectional two-way binding so
      // anything we update on the directive will be updated in the
      // controller and scope as well
      
      // When we use the dropdowns and choose a different network, the change is reflected 
      // about all of the directives, since the phones are on a family plan. This is 
      // because the "=" is a two-way binding. 
      network: '=',
      
      // "&" is for calling something within the scope of that controller
      
      // The "&" allows make-call to be bound to the leaveVoicemail function, 
      // while remaining isolated from the other directives.
      makeCall: '&'
    },
    templateUrl: 'phone.html',
    link: function(scope){
        scope.networks = ["Verizon", "AT&T", "Sprint"];
        scope.network = scope.networks[0];
      }
  };
})


