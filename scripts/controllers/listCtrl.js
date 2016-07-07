app.controller("listCtrl", ['$scope', 'Songs', function($scope, Songs){
	$scope.title = "Playlist";
	$scope.songs = Songs.get().then(function(data){
		$scope.songs = data;
	});
	/*$scope.ref = "https://www.youtube.com/watch?v=" + $scope.songs.id*/
}])