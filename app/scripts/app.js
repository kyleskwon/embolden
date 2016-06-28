var app = angular.module("embolden", ["firebase"]);

app.controller("HomeCtrl", function($scope, $firebaseArray, $firebaseAuth) {
//    var refAuth = new Firebase("https://embolden.firebaseio.com");
//    var auth = $firebaseAuth(refAuth);
//    
//    auth.$authWithOAuthPopup("facebook").then(function(authData) {
//        console.log("Logged in as:", authData.uid);
//    }).catch(function(error) {
//        console.log("Authentication failed:", error);
//    });
    
    var ref = new Firebase("https://embolden.firebaseio.com/messages");
    
    $scope.messages = $firebaseArray(ref);
    
    $scope.addMessage = function() {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    };
});