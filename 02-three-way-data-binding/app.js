// APP MODULE
angular.module('app', ['firebase'])

	// CONTROLLER
	.controller('AppCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
		
		// USER
		var user = $firebaseObject(firebase.database().ref('users/xgdSd173da3dK3oUUw16'));
		user.$loaded(function(){
			user.$bindTo($scope, 'user');
		});

		// USERS
		$scope.users = $firebaseArray(firebase.database().ref('users'));

	}])
