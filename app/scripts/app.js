var app = angular.module('embolden', ['firebase', 'ui.router']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
    
    $urlRouterProvider.otherwise("/home");
    
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeCtrl',
            templateUrl: '/templates/home.html'
        })
        .state('about', {
            url: '/about',
            controller: 'AboutCtrl',
            templateUrl: '/templates/about.html'
        })
        .state('skills', {
            url: '/skills',
            controller: 'SkillsCtrl',
            templateUrl: '/templates/skills.html'
        })
        .state('inspiration', {
            url: '/inspiration',
            controller: 'InspirationCtrl',
            templateUrl: '/templates/inspiration.html'
        })
        .state('contact', {
            url: '/contact',
            controller: 'ContactCtrl',
            templateUrl: '/templates/contact.html'
        });
}]);

app.controller("HomeCtrl", function($scope, $firebaseArray, $firebaseAuth) {
//    var refAuth = new Firebase("https://embolden.firebaseio.com");
//    var auth = $firebaseAuth(refAuth);
//    
//    auth.$authWithOAuthPopup("facebook").then(function(authData) {
//        console.log("Logged in as:", authData.uid);
//    }).catch(function(error) {
//        console.log("Authentication failed:", error);
//    });
    
    //smooth scrolling
    $(document).ready(function(){
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

       // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
          });
        } // End if
      });
    })
    
    var ref = new Firebase("https://embolden.firebaseio.com/messages");
    
    $scope.messages = $firebaseArray(ref);
    
    $scope.addMessage = function() {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    };
});

app.controller("AboutCtrl", function($scope) {
    
});

app.controller("SkillsCtrl", function($scope) {
    
});

app.controller("InspirationCtrl", function($scope) {
    
});

app.controller("ContactCtrl", function($scope) {
    
});